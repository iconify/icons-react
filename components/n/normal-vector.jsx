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
		"content": `<style>.tjd9_0e_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.25 17.25l1.3-1.671A1.5 1.5 0 0 1 7.734 15h9.916a1.394 1.394 0 0 1 1.1 2.25l-1.3 1.671a1.5 1.5 0 0 1-1.184.579H6.35a1.394 1.394 0 0 1-1.1-2.25m6.75 0V4M8.75 7.25L12 4l3.25 3.25");
}
</style><path class="tjd9_0e_t"/>`,
		"fallback": "uix:normal-vector",
	});
}

export default Component;
