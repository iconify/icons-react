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
		"content": `<style>.h9y69yb9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21V8.5M6 3h3v5.5H6Zm6 3h8l-1.5 11h-5Zm2 11h4v4h-4ZM12 3h8");
}
</style><path class="h9y69yb9v"/>`,
		"fallback": "uix-sharp:toothbrush-kit",
	});
}

export default Component;
