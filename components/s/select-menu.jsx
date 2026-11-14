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

.l1e-7zb8z {
  d: path("M6.875 6h10.25a4.375 4.375 0 0 1 4.375 4.375v3.25A4.375 4.375 0 0 1 17.125 18H6.875A4.375 4.375 0 0 1 2.5 13.625v-3.25A4.375 4.375 0 0 1 6.875 6M6 12h3.5");
}

.stw4lhbvt {
  d: path("m13.5 10.75l2.5 2.5l2.5-2.5");
}
</style><g class="hntgybcog"><path class="l1e-7zb8z"/><path class="stw4lhbvt"/></g>`,
		"fallback": "uix:select-menu",
	});
}

export default Component;
