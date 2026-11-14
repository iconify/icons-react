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
		"content": `<style>.c3aji-b_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4a12 12 0 0 0 13 13Zm3.5 9.5v7m-4 0h8m-1-10l4-4m0 0h.01");
}
</style><path class="c3aji-b_z"/>`,
		"fallback": "uix:radar-station",
	});
}

export default Component;
