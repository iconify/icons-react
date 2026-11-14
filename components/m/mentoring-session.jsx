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
		"content": `<style>.jgj2mlb3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4 21c0-4 3.5-6.5 8-6.5q.179 0 .356.005M16.5 21.5v-1.75c-1-.75-1.75-1.75-1.75-3a3.25 3.25 0 0 1 6.5 0c0 1.25-.75 2.25-1.75 3v1.75Z");
}
</style><path class="jgj2mlb3t"/>`,
		"fallback": "uix:mentoring-session",
	});
}

export default Component;
