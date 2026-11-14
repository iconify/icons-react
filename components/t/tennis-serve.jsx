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
		"content": `<style>.mtaf6mbsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5a4.5 6 0 1 0 9 0a4.5 6 0 1 0-9 0m4.5 6v7M15 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M9 2.5v12m-4.5-6h9");
}
</style><path class="mtaf6mbsv"/>`,
		"fallback": "uix:tennis-serve",
	});
}

export default Component;
