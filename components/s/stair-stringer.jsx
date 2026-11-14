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
		"content": `<style>.x83opqblh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 21H3v-4h3.75v-3.5h3.5V10h3.5V6.5h3.5V3H21v4.75m0 0L7.75 21");
}
</style><path class="x83opqblh"/>`,
		"fallback": "uix:stair-stringer",
	});
}

export default Component;
