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
		"content": `<style>.oacnj-lpf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19V5h18v7.9M3 19L17 5M3 10l9 9M9 5l9.405 9.405M14.75 18l2 2L21 15.75");
}
</style><path class="oacnj-lpf"/>`,
		"fallback": "uix:soccer-clean-sheet",
	});
}

export default Component;
