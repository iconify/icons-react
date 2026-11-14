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
		"content": `<style>.ch-5lobji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M10 8v6.5M7 21l3-6.5l3 6.5m-8-8.5l5-4l4.5-1l3-4");
}
</style><path class="ch-5lobji"/>`,
		"fallback": "uix:person-waving",
	});
}

export default Component;
