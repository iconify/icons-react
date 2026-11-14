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
		"content": `<style>.xrrpgob3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18c0 5.25-4 9-9 9s-9-3.75-9-9Zm10.5 0l4-8m-1 8L21 4M4.75 8a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM7.5 8h.01");
}
</style><path class="xrrpgob3t"/>`,
		"fallback": "uix-sharp:ramen-bowl",
	});
}

export default Component;
