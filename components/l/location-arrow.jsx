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
		"content": `<style>.s11l_3bwv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.051 9.433l9.32-4.111a1.75 1.75 0 0 1 2.307 2.307l-4.111 9.32A1.364 1.364 0 0 1 12 16.75l-.739-2.771a1.75 1.75 0 0 0-1.24-1.24L7.25 12a1.364 1.364 0 0 1-.199-2.567");
}
</style><path class="s11l_3bwv"/>`,
		"fallback": "uix:location-arrow",
	});
}

export default Component;
