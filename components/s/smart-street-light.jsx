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
		"content": `<style>.ewy8a4b9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.5V7A3.5 3.5 0 0 1 10 3.5h2.5m0 0h7a3.5 3.5 0 0 1-7 0M4 21.5h5M19.25 9.129a6.5 6.5 0 0 1-6.5 0");
}
</style><path class="ewy8a4b9s"/>`,
		"fallback": "uix:smart-street-light",
	});
}

export default Component;
