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
		"content": `<style>.mhaw-jb_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8h10l2.5 12.5h-15Zm3-3a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-.5 9h5");
}
</style><path class="mhaw-jb_h"/>`,
		"fallback": "uix:product-weight",
	});
}

export default Component;
