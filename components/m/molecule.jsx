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
		"content": `<style>.ty65nfb_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM9 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm6.5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-8-2.5l2.5-3m4 0l2.5 3");
}
</style><path class="ty65nfb_b"/>`,
		"fallback": "uix-sharp:molecule",
	});
}

export default Component;
