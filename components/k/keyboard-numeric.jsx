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
		"content": `<style>.hgalegbqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.375 2.5h5.25A4.375 4.375 0 0 1 19 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-5.25A4.375 4.375 0 0 1 5 17.125V6.875A4.375 4.375 0 0 1 9.375 2.5M9 6.5h.01m2.99 0h.01m2.99 0h.01M9 10h.01M12 10h.01M15 10h.01M9 13.5h.01m2.99 0h.01m2.99 0h.01M9 17.5h3m3 0h.01");
}
</style><path class="hgalegbqp"/>`,
		"fallback": "uix:keyboard-numeric",
	});
}

export default Component;
