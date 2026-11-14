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
		"content": `<style>.wpe67dbmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14.5V6a3 3 0 0 1 6 0v8.5a4 4 0 1 1-6 0m3-1v3.75M18 14.5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="wpe67dbmj"/>`,
		"fallback": "uix:temperature-low",
	});
}

export default Component;
