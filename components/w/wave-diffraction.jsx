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
		"content": `<style>.krkwpm2ub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5v7m0 5v7M5.5 6v12M13 8a5 5 0 0 1 0 8m3-10a8.5 8.5 0 0 1 0 12");
}
</style><path class="krkwpm2ub"/>`,
		"fallback": "uix:wave-diffraction",
	});
}

export default Component;
