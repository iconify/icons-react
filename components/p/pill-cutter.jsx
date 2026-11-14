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
		"content": `<style>.odo1bto5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5.25a6.75 6.75 0 0 0 0 13.5Zm5.5 0a6.75 6.75 0 0 1 0 13.5ZM12 2.5v19");
}
</style><path class="odo1bto5q"/>`,
		"fallback": "uix:pill-cutter",
	});
}

export default Component;
