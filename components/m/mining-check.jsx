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
		"content": `<style>.hsyq2db3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3q8.5 1.5 10 10m-3.25-6.75L6.5 16.5m-4 4.5L5 16.5h4l3 4.5Zm12.25-3l2 2L21 15.75");
}
</style><path class="hsyq2db3j"/>`,
		"fallback": "uix:mining-check",
	});
}

export default Component;
