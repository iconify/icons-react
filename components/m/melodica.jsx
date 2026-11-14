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
		"content": `<style>.ws6n6-b4c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 7h8a3.5 3.5 0 0 1 3.5 3.5A3.5 3.5 0 0 1 18 14h-8a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 10 7M6.5 9.5c-2.5 0-4 1.5-4 4V17m7-6v3m3-3v3m3-3v3m3-3v3");
}
</style><path class="ws6n6-b4c"/>`,
		"fallback": "uix:melodica",
	});
}

export default Component;
