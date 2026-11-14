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
		"content": `<style>.e2e3qjbkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15H14c0 3-3 5-6.5 5c-2.5 0-5-2-5-5ZM14 15h2.75m0-1.25h4.75v2.5h-4.75ZM8.25 15V9m0 1c0-2.75-1.75-4.5-4.75-4.5c0 3 2 4.5 4.75 4.5Zm0-1C8.25 6 10 4 13 4c0 3-2 5-4.75 5Z");
}
</style><path class="e2e3qjbkj"/>`,
		"fallback": "uix-sharp:seedling-transplant",
	});
}

export default Component;
