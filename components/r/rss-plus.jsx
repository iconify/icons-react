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
		"content": `<style>.bnae4c6_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13a6 6 0 0 1 6 6M5 7.5A11.5 11.5 0 0 1 16.5 19m-12.25-.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM18 3v6m-3-3h6");
}
</style><path class="bnae4c6_r"/>`,
		"fallback": "uix-sharp:rss-plus",
	});
}

export default Component;
