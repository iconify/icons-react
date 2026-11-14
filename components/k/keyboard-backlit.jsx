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
		"content": `<style>.ltouvhblz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 10h13a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 16.5v-3A3.5 3.5 0 0 1 5.5 10m.5 3.5h.01m3.99 0h.01m3.99 0h.01m3.99 0h.01M8.5 16.75h7M12 3v3M6 4l1.5 2.5M18 4l-1.5 2.5");
}
</style><path class="ltouvhblz"/>`,
		"fallback": "uix:keyboard-backlit",
	});
}

export default Component;
