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

.ko6u8tbst {
  d: path("M9.5 14.25L11.25 16l3.25-3.25");
}

.ospmtkbkr {
  d: path("M5.5 6h13A3.5 3.5 0 0 1 22 9.5v5a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 14.5v-5A3.5 3.5 0 0 1 5.5 6M6 9.25h.01m3.99 0h.01m3.99 0h.01m3.99 0h.01");
}
</style><g class="hntgybcog"><path class="ospmtkbkr"/><path class="ko6u8tbst"/></g>`,
		"fallback": "uix:keyboard-check",
	});
}

export default Component;
