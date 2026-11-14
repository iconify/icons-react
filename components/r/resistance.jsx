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
		"content": `<style>.j72hx-e9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 12h2L9 8.5l2 7l2-7l2 7l1.5-3.5h2m-16 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm16 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="j72hx-e9h"/>`,
		"fallback": "uix-sharp:resistance",
	});
}

export default Component;
