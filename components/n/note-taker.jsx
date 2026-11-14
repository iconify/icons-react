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
		"content": `<style>.zee5a_bhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M2.5 20v-2c0-2.25 1.75-4 3.75-4S10 15.75 10 18v2m6.5-16H18a3.5 3.5 0 0 1 3.5 3.5v9A3.5 3.5 0 0 1 18 20h-1.5a3.5 3.5 0 0 1-3.5-3.5v-9A3.5 3.5 0 0 1 16.5 4m-.75 4.5h3m-3 4h3m-3 3.5h1.75");
}
</style><path class="zee5a_bhq"/>`,
		"fallback": "uix:note-taker",
	});
}

export default Component;
