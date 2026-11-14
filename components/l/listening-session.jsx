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
		"content": `<style>.uj_5gvb1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 12.5v-2a3.75 3.75 0 0 1 7.5 0v2m-9.25 0h3.25v7H2.5Zm7.75 0h3.25v7h-3.25Zm7.5-8.5H20a1.5 1.5 0 0 1 1.5 1.5V9a1.5 1.5 0 0 1-1.5 1.5h-1L16.25 13V5.5a1.5 1.5 0 0 1 1.5-1.5Z");
}
</style><path class="uj_5gvb1i"/>`,
		"fallback": "uix-sharp:listening-session",
	});
}

export default Component;
