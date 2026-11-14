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
		"content": `<style>.g73o49qud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14c0-4 3-6.5 6.5-6.5s6.5 2.5 6.5 6.5Zm4.25 0v6a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-6M4 8.5h.01M8.5 4h.01m6.99 0h.01M20 8.5h.01");
}
</style><path class="g73o49qud"/>`,
		"fallback": "uix:mushroom-spores",
	});
}

export default Component;
