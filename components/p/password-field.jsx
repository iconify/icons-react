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
		"content": `<style>.a6e9ghyht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5V10a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 10V6.5A3.5 3.5 0 0 1 6 3m0 5.25h.01m3.49 0h.01m3.49 0h.01m3.49-2.5v5m-2.5 8a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4.5 0h3m-1 0V21");
}
</style><path class="a6e9ghyht"/>`,
		"fallback": "uix:password-field",
	});
}

export default Component;
