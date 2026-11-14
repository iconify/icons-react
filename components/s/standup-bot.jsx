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
		"content": `<style>.r5b1y8b-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 10.5h2.75A4.375 4.375 0 0 1 14 14.875v1.75A4.375 4.375 0 0 1 9.625 21h-2.75A4.375 4.375 0 0 1 2.5 16.625v-1.75A4.375 4.375 0 0 1 6.875 10.5m8.625-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V7a2 2 0 0 1-2 2H18l-2.5 2Zm-7.25 6V8m0-2.75h.01M5.75 15.5h.01m4.99 0h.01");
}
</style><path class="r5b1y8b-d"/>`,
		"fallback": "uix:standup-bot",
	});
}

export default Component;
