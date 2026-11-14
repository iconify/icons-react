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
		"content": `<style>.u-vk9obmf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5c-.6 0-1-.4-1-1c0-3 2.9-5 6.5-5c1.25 0 2.35.25 3.25.75v5.25ZM5.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M16 4.5a3.5 3.5 0 0 1 .906 6.881M18 21s-3-1.9-3-4c0-1.1.8-2 1.75-2c.55 0 1 .25 1.25.75c.25-.5.7-.75 1.25-.75c.95 0 1.75.9 1.75 2c0 2.1-3 4-3 4");
}
</style><path class="u-vk9obmf"/>`,
		"fallback": "uix:users-heart",
	});
}

export default Component;
