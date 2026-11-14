import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.djhxmtb3c {
  d: path("M8.5 2.5h4.55a3.5 3.5 0 0 1 2.475 1.025l2.45 2.45A3.5 3.5 0 0 1 19 8.45V18a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 18V6a3.5 3.5 0 0 1 3.5-3.5");
}

.fgh3xqb1o {
  d: path("M10.625 10h2.75A2.625 2.625 0 0 1 16 12.625v3.25a2.625 2.625 0 0 1-2.625 2.625h-2.75A2.625 2.625 0 0 1 8 15.875v-3.25A2.625 2.625 0 0 1 10.625 10M8 14.25h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="djhxmtb3c"/><path class="fgh3xqb1o"/></g>`,
		"fallback": "uix:sim-card",
	});
}

export default Component;
