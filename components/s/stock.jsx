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
		"content": `<style>.y93h2fb8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4v16M17 6v12M5 8h4v7H5Zm10 1.5h4v5h-4Z");
}
</style><path class="y93h2fb8w"/>`,
		"fallback": "uix-sharp:stock",
	});
}

export default Component;
