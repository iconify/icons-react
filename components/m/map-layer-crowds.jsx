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
		"content": `<style>.ze-p42e6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 7a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M6 20c0-4 2.75-6.5 6-6.5s6 2.5 6 6.5M2.5 7.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m15 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-15 10c0-3 1.25-5 3.75-5.25M21.5 17.5c0-3-1.25-5-3.75-5.25");
}
</style><path class="ze-p42e6r"/>`,
		"fallback": "uix:map-layer-crowds",
	});
}

export default Component;
