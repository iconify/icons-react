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
		"content": `<style>.tsav82b4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12c2-4 6.5-5 11-3.5c2 .5 3 1.5 3 3.5s-1 3-3 3.5C9.5 17 5 16 3 12m15.522-1.184l.728-.566a1.394 1.394 0 0 1 2.25 1.1v1.3a1.394 1.394 0 0 1-2.25 1.1l-.728-.566a1.5 1.5 0 0 1 0-2.368M7 11h.01");
}
</style><path class="tsav82b4w"/>`,
		"fallback": "uix:taiyaki",
	});
}

export default Component;
