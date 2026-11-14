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
		"content": `<style>.nh9vg4iij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19c3.5-4.5 15.5-4.5 19 0Zm9.5-3.25V9m0 2.5C12 8 14.5 5 18 5c0 3.5-2.5 6.5-6 6.5");
}
</style><path class="nh9vg4iij"/>`,
		"fallback": "uix:sprout-soil",
	});
}

export default Component;
