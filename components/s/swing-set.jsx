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
		"content": `<style>.ltthhlb8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4h17M6 4L2.5 21.5M18 4l3.5 17.5M10 4v10m4-10v10m-5.5 0h7");
}
</style><path class="ltthhlb8l"/>`,
		"fallback": "uix:swing-set",
	});
}

export default Component;
