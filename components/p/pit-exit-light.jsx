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
		"content": `<style>.wkpxhpb0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 6.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 4V18m-9.5 3H8v-3h13.5M3 6.5h2.25m13.5 0H21");
}
</style><path class="wkpxhpb0y"/>`,
		"fallback": "uix:pit-exit-light",
	});
}

export default Component;
