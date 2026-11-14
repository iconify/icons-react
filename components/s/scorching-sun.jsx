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
		"content": `<style>.gdsy99b7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M11 4.5v-2m0 15v2M4.5 11h-2m15 0h.4m.2 0h1.4m-13-4.5L5 5m10.5 1.5L17 5M6.5 15.5L5 17m13-3.25c2.5 2 3 3.5 3 5.25a3 3 0 0 1-6 0c0-1.5.75-2.5 1.5-3c0 1 .5 1.5 1 1.5c.5-1 .5-2.5.5-3.75");
}
</style><path class="gdsy99b7s"/>`,
		"fallback": "uix:scorching-sun",
	});
}

export default Component;
