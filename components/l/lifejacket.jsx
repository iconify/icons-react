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
		"content": `<style>.wi0twrb3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3c0 3 8 3 8 0l3.5 2v14a2 2 0 0 1-2 2H13V9h-2v12H6.5a2 2 0 0 1-2-2V5ZM4.5 14.5H11m2 0h6.5");
}
</style><path class="wi0twrb3c"/>`,
		"fallback": "uix-sharp:lifejacket",
	});
}

export default Component;
