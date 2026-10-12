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
		"content": `<style>.x_2dvswln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12H6m12 0h3.25M6 12l1-3l2 6l2-6l2 6l2-6l2 6l1-3");
}
</style><path class="x_2dvswln"/>`,
		"fallback": "iconoven:resistor",
	});
}

export default Component;
