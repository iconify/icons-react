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
		"content": `<style>.hlq340vkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5h6a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2a2 2 0 0 1 2-2M3 13.5h9.5m-9.5 6h9.5m6-6.5V5m-2.75 2.75L18.5 5l2.75 2.75");
}
</style><path class="hlq340vkf"/>`,
		"fallback": "uix:move-line-up",
	});
}

export default Component;
