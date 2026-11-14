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
		"content": `<style>.bfed4x5-g {
  d: path("m7 14.5l2.25 2.25L7 19m5 0h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.siv36-b4j {
  d: path("M6.25 2.5h11.5A3.25 3.25 0 0 1 21 5.75A3.25 3.25 0 0 1 17.75 9H6.25A3.25 3.25 0 0 1 3 5.75A3.25 3.25 0 0 1 6.25 2.5m.25 9.25h11a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18v-2.75a3.5 3.5 0 0 1 3.5-3.5m0-6h.01m4.49 0h6.5");
}
</style><g class="hntgybcog"><path class="siv36-b4j"/><path class="bfed4x5-g"/></g>`,
		"fallback": "uix:server-console",
	});
}

export default Component;
