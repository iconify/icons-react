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
		"content": `<style>.gusbljb9h {
  d: path("m6 17l3.5-6.5h6L18 17m-8.5-6.5L12 17H6m-3.5-6.5h7m6 0l1-3M4 7h1.5A1.5 1.5 0 0 1 7 8.5V9a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 9v-.5A1.5 1.5 0 0 1 4 7m5.5 3.5l2-3.5l5 .5m-4-4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jc_t8d0vn {
  d: path("M2.5 17a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m12 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="jc_t8d0vn"/><path class="gusbljb9h"/></g>`,
		"fallback": "uix:paperboy-bike",
	});
}

export default Component;
