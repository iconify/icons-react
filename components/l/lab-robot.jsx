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
		"content": `<style>.z6b-_9bad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20h7m-3.5 0L8.75 8.5M7 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0h5.5V10m-2 2.75V10h4v2.75m-3.75 2.75h4a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 18.75 20h-4A1.75 1.75 0 0 1 13 18.25v-1a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="z6b-_9bad"/>`,
		"fallback": "uix:lab-robot",
	});
}

export default Component;
