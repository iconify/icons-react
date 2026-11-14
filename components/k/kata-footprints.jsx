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
		"content": `<style>.d9lrnbb9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 18a3.25 2.5 0 1 0 6.5 0a3.25 2.5 0 1 0-6.5 0m6.5-6a3.25 2.5 0 1 0 6.5 0a3.25 2.5 0 1 0-6.5 0m6.5-6a3.25 2.5 0 1 0 6.5 0a3.25 2.5 0 1 0-6.5 0");
}
</style><path class="d9lrnbb9t"/>`,
		"fallback": "uix:kata-footprints",
	});
}

export default Component;
