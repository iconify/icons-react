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

.k2umkbc4r {
  d: path("M6.875 10h10.25a4.375 4.375 0 0 1 4.375 4.375v2.25A4.375 4.375 0 0 1 17.125 21H6.875A4.375 4.375 0 0 1 2.5 16.625v-2.25A4.375 4.375 0 0 1 6.875 10");
}

.rwk-g2w0b {
  d: path("M5.5 15.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8-2h4m-4 4h4M9.845 7.242a3.5 3.5 0 0 1 4.31 0M7.05 5.05a7 7 0 0 1 9.9 0");
}
</style><g class="hntgybcog"><path class="k2umkbc4r"/><path class="rwk-g2w0b"/></g>`,
		"fallback": "uix:internet-radio",
	});
}

export default Component;
