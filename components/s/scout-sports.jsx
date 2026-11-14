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
		"content": `<style>.wby3epbet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 6za3.25 3.25 0 0 1 3.25 3.25v2a3.25 3.25 0 0 1-3.25 3.25A3.25 3.25 0 0 1 4 11.25v-2A3.25 3.25 0 0 1 7.25 6m9.5 0zA3.25 3.25 0 0 1 20 9.25v2a3.25 3.25 0 0 1-3.25 3.25a3.25 3.25 0 0 1-3.25-3.25v-2A3.25 3.25 0 0 1 16.75 6M10.5 9h3M7.25 6c0-2.5 2.25-3.5 4.75-3.5s4.75 1 4.75 3.5M3 21.5c0-2.5 3.5-4.25 9-4.25s9 1.75 9 4.25");
}
</style><path class="wby3epbet"/>`,
		"fallback": "uix:scout-sports",
	});
}

export default Component;
