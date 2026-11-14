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
		"content": `<style>.h1b6pojjj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.75 5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm-11 6.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM9 10.5L15 7m-6 6.5l4.5 2.75m1.5.25h6V21h-6Zm1.25 0v-1.25a1.75 1.75 0 0 1 3.5 0v1.25");
}
</style><path class="h1b6pojjj"/>`,
		"fallback": "uix-sharp:share-lock",
	});
}

export default Component;
