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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p2ej5wbxl {
  d: path("m10 9.25l-3-6.5h10l-3 6.5M9 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.xgt97b4ir {
  d: path("M5.75 15a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0");
}
</style><g class="hntgybcog"><path class="xgt97b4ir"/><path class="p2ej5wbxl"/></g>`,
		"fallback": "uix:nobel-medal",
	});
}

export default Component;
