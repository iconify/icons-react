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
		"content": `<style>.bmu67neio {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 21l1-12.5h3l1 12.5Zm1-12.5v-3h3v3M5 3.5L8 5m11-1.5L16 5M3.5 21h17");
}
</style><path class="bmu67neio"/>`,
		"fallback": "uix:lighthouse",
	});
}

export default Component;
