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
		"content": `<style>.w-8ugdb0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.5H7.5a4.5 4.5 0 0 0 0 9H9m6-9h1.5A4.5 4.5 0 0 1 21 12M8.5 12h7m2.5 9s-3-1.75-3-4c0-1 .75-1.75 1.5-1.75q1.125 0 1.5.75q.375-.75 1.5-.75c.75 0 1.5.75 1.5 1.75c0 2.25-3 4-3 4");
}
</style><path class="w-8ugdb0c"/>`,
		"fallback": "uix:link-heart",
	});
}

export default Component;
