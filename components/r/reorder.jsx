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
		"content": `<style>.nhri1mb8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 6h10m-10 6h10m-10 6h10M5 4v16M2.5 6.5L5 4l2.5 2.5m-5 11L5 20l2.5-2.5");
}
</style><path class="nhri1mb8o"/>`,
		"fallback": "uix-sharp:reorder",
	});
}

export default Component;
