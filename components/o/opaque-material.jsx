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
		"content": `<style>.uz59bvw5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 3h7v18h-7Zm-12 5H11M8.75 5.75L11 8l-2.25 2.25M2.5 16H11m-2.25-2.25L11 16l-2.25 2.25");
}
</style><path class="uz59bvw5v"/>`,
		"fallback": "uix-sharp:opaque-material",
	});
}

export default Component;
