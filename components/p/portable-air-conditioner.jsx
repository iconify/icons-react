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
		"content": `<style>.wshlrhdte {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7h4a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 12 19H8a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 8 7m0 0c0-4 5.5-4.5 11.5-3v3c-4.5-1.25-8-1.5-8 0m-4 3h5m-5 3h5M7 21.75h.01m5.99 0h.01");
}
</style><path class="wshlrhdte"/>`,
		"fallback": "uix:portable-air-conditioner",
	});
}

export default Component;
