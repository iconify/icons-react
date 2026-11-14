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
		"content": `<style>.u9z9vubxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7a7 7 0 0 0 9 9ZM8 11.5L13.5 6m0 0h.01m-8.26 8.5v6M3 20.5h4.5m7.25-2.5l2 2L21 15.75");
}
</style><path class="u9z9vubxq"/>`,
		"fallback": "uix-sharp:satellite-dish-check",
	});
}

export default Component;
