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
		"content": `<style>.y2gwo962m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 3.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0M17 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0m2.5 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0M17 18a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-6 2.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0M5 18a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-2.5-6a1 1 0 1 0 2 0a1 1 0 1 0-2 0M5 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><path class="y2gwo962m"/>`,
		"fallback": "uix:loading-circle",
	});
}

export default Component;
