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
		"content": `<style>.igbwnqbis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21v-5h5.5v-5H14V6h7v15ZM14.5 6c0-3 6.5-3 6.5 0");
}
</style><path class="igbwnqbis"/>`,
		"fallback": "uix:pet-stairs",
	});
}

export default Component;
