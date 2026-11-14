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
		"content": `<style>.l4fwfebve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18 9.5a6 6 0 1 1-7-7a7 7 0 0 0 7 7Zm-10 8l-1 4m5-4l-1 4m5-4l-1 4");
}
</style><path class="l4fwfebve"/>`,
		"fallback": "uix-sharp:moon-rain",
	});
}

export default Component;
