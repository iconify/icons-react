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
		"content": `<style>.vzec1kbzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M6 8v6l-2 5m2-5l2 5M18 8v6l-2 5m2-5l2 5M9.75 9h4.5A1.75 1.75 0 0 1 16 10.75v1.5A1.75 1.75 0 0 1 14.25 14h-4.5A1.75 1.75 0 0 1 8 12.25v-1.5A1.75 1.75 0 0 1 9.75 9");
}
</style><path class="vzec1kbzw"/>`,
		"fallback": "uix:two-person-lift",
	});
}

export default Component;
