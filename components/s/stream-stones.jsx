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
		"content": `<style>.p_d8idbwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5h1.5A1.5 1.5 0 0 1 7 12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12A1.5 1.5 0 0 1 4 10.5m7.25 0h1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m7.25 0H20a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5A1.5 1.5 0 0 1 17 12a1.5 1.5 0 0 1 1.5-1.5M3 6.5q2.25-1.75 4.5 0t4.5 0t4.5 0t4.5 0m-18 11q2.25-1.75 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="p_d8idbwy"/>`,
		"fallback": "uix:stream-stones",
	});
}

export default Component;
