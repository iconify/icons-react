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
		"content": `<style>.aa8mwdb5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 9h14.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H4.75a2.25 2.25 0 0 1-2.25-2.25A2.25 2.25 0 0 1 4.75 9M5 13.5v7m14-7v7M9.75 4h4.5A1.75 1.75 0 0 1 16 5.75v1.5A1.75 1.75 0 0 1 14.25 9h-4.5A1.75 1.75 0 0 1 8 7.25v-1.5A1.75 1.75 0 0 1 9.75 4");
}
</style><path class="aa8mwdb5q"/>`,
		"fallback": "uix:office-desk",
	});
}

export default Component;
