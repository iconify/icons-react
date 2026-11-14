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
		"content": `<style>.g4oqkl4hu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14.5h13l-1.75 7h-9.5Zm6.5 0V9m0 1.5c-4.5 0-7-2.5-7-7c4.5 0 7 2.5 7 7ZM12 9c4 0 7-2.25 7-6c-4 0-7 2.25-7 6Z");
}
</style><path class="g4oqkl4hu"/>`,
		"fallback": "uix-sharp:potted-plant",
	});
}

export default Component;
