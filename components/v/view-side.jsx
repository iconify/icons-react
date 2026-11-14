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
		"content": `<style>.fjtt7ab7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 6h5.5A1.75 1.75 0 0 1 13 7.75v9.5A1.75 1.75 0 0 1 11.25 19h-5.5A1.75 1.75 0 0 1 4 17.25v-9.5A1.75 1.75 0 0 1 5.75 6M2.5 19h19m0-6.5h-5M19 10l-2.5 2.5L19 15");
}
</style><path class="fjtt7ab7l"/>`,
		"fallback": "uix:view-side",
	});
}

export default Component;
