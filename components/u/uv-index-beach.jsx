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
		"content": `<style>.v1g0tbb6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0M3 19.5q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0m-9-17v1m0 11v1M5.5 9h1m11 0h1M7.25 4.25L8 5m8.75-.75L16 5m-8.75 8.75L8 13m8.75.75L16 13");
}
</style><path class="v1g0tbb6x"/>`,
		"fallback": "uix:uv-index-beach",
	});
}

export default Component;
