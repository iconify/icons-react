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
		"content": `<style>.p7c9h9b3q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 5.5H7.5a4.5 4.5 0 0 0 0 9H9m6-9h1.5A4.5 4.5 0 0 1 21 10M8.5 10h7m0 6h6v4.5h-6Zm1.25 0v-1.25a1.75 1.75 0 0 1 3.5 0V16");
}
</style><path class="p7c9h9b3q"/>`,
		"fallback": "uix-sharp:link-lock",
	});
}

export default Component;
