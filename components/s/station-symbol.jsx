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
		"content": `<style>.onq5-n8zb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 9.25h2a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-2A3.5 3.5 0 0 1 7.5 18v-5.25a3.5 3.5 0 0 1 3.5-3.5M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="onq5-n8zb"/>`,
		"fallback": "uix:station-symbol",
	});
}

export default Component;
