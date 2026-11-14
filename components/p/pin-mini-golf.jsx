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
		"content": `<style>.y3iurhb1u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.984 3.676l4.851 1.654a1.5 1.5 0 0 1 0 2.84L9.984 9.824A1.5 1.5 0 0 1 8 8.404V5.096a1.5 1.5 0 0 1 1.984-1.42M8 3v16m-5 0a6.5 2.25 0 1 0 13 0a6.5 2.25 0 1 0-13 0");
}
</style><path class="y3iurhb1u"/>`,
		"fallback": "uix:pin-mini-golf",
	});
}

export default Component;
