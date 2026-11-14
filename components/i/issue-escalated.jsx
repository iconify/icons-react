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
		"content": `<style>.su88o1bhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 19a8 8 0 1 1 8-8m-8 0h.01M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="su88o1bhz"/>`,
		"fallback": "uix-sharp:issue-escalated",
	});
}

export default Component;
