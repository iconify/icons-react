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
		"content": `<style>.odi2x3b3i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 5.5c0-1.75 1.5-3 3-2.5c1.5-.5 3 .75 3 2.5c1 .75.75 2.5-.5 2.75c-.75.75-1.75.75-2.5.25c-.75.5-1.75.5-2.5-.25C8.25 8 8 6.25 9 5.5m3 3v7m0-5L7.5 13L5 16.5m7-6l4.5 2.5l2.5 3.5m-7-1l-3.5 6m3.5-6l3.5 6m-8-8.5L6 12m10.5 1l1.5-1m-8 7l-2-.25m6 .25l2-.25");
}
</style><path class="odi2x3b3i"/>`,
		"fallback": "uix:nervous-system",
	});
}

export default Component;
