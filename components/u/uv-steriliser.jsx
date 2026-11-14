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
		"content": `<style>.dzpunp9ma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h13a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2a2 2 0 0 1 2-2M4 16v4a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 20v-4M7 9.5l-1 3m6-3v3m5-3l1 3");
}
</style><path class="dzpunp9ma"/>`,
		"fallback": "uix:uv-steriliser",
	});
}

export default Component;
