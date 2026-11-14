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
		"content": `<style>.d0m6afb0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10.5h14.5V21H7Zm4.5 0V9A1.5 1.5 0 0 1 13 7.5h2.5A1.5 1.5 0 0 1 17 9v1.5M2.5 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM9 6.5h.01m2.24 1h.01M7 15h14.5");
}
</style><path class="d0m6afb0x"/>`,
		"fallback": "uix-sharp:security-cash-in-transit",
	});
}

export default Component;
