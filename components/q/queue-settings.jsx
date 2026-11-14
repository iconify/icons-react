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
		"content": `<style>.hu_r3dp9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h11.25m4.5 0h3.25m-7.75 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M2.5 12h3.25m4.5 0H21.5M5.75 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M2.5 19.5h8.25m4.5 0h6.25m-10.75 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><path class="hu_r3dp9s"/>`,
		"fallback": "uix:queue-settings",
	});
}

export default Component;
