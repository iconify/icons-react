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
		"content": `<style>.euis6sr2u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 5.5h10.25A4.375 4.375 0 0 1 21.5 9.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 14.125v-4.25A4.375 4.375 0 0 1 6.875 5.5M6.5 9h.01M10 9h.01m3.74 0h.01m3.74 0h.01M6.5 12.25h.01m3.49 0h.01m3.74 0h.01m3.74 0h.01M7.5 15.5h9");
}
</style><path class="euis6sr2u"/>`,
		"fallback": "uix:keyboard-compact",
	});
}

export default Component;
