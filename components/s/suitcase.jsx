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
		"content": `<style>.rcerhdc3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.375 7.5h7.25A4.375 4.375 0 0 1 20 11.875v3.75A4.375 4.375 0 0 1 15.625 20h-7.25A4.375 4.375 0 0 1 4 15.625v-3.75A4.375 4.375 0 0 1 8.375 7.5M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M4 13h16");
}
</style><path class="rcerhdc3c"/>`,
		"fallback": "uix:suitcase",
	});
}

export default Component;
