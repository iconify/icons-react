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
		"content": `<style>.erdn16ucf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5V13a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8.5Zm2-12v-3A1.5 1.5 0 0 1 7 5h7a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 14 8h-3a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 0 1 8 11H7a1.5 1.5 0 0 1-1.5-1.5m13-6h.01m1.49 3h.01m-1.51 3h.01m-.51 5q.5 3 3.5 3.5q-3 .5-3.5 3.5q-.5-3-3.5-3.5q3-.5 3.5-3.5");
}
</style><path class="erdn16ucf"/>`,
		"fallback": "uix:oven-cleaner",
	});
}

export default Component;
