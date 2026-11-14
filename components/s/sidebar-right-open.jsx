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
		"content": `<style>.i8qic3p9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 4h10.25A4.375 4.375 0 0 1 21.5 8.375v7.25A4.375 4.375 0 0 1 17.125 20H6.875A4.375 4.375 0 0 1 2.5 15.625v-7.25A4.375 4.375 0 0 1 6.875 4M14.5 4v16");
}
</style><path class="i8qic3p9t"/>`,
		"fallback": "uix:sidebar-right-open",
	});
}

export default Component;
