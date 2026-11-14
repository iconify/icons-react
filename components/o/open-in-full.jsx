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
		"content": `<style>.dxgyyynsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6h5A3.5 3.5 0 0 1 18 9.5v5a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 14.5v-5A3.5 3.5 0 0 1 9.5 6m4.5 4l7-7m-4.5 0H21v4.5M10 14l-7 7m0-4.5V21h4.5");
}
</style><path class="dxgyyynsr"/>`,
		"fallback": "uix:open-in-full",
	});
}

export default Component;
