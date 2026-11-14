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
		"content": `<style>.s9mi7po8x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21h16m-10 0V10m0 2c-4 0-5.5-3-5.5-5c3 0 5.5 2 5.5 5m0-2c0-3.5 2.5-6 6-6c0 3.5-2.5 6-6 6m6 11V11m-6 4.5h6");
}
</style><path class="s9mi7po8x"/>`,
		"fallback": "uix:sapling-stake",
	});
}

export default Component;
