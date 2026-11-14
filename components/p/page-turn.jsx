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
		"content": `<style>.nk9qdqb0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.7 20H3.5V2.5H18v10.1M7 7.5h7.5m-7.5 4h5m9.5 7h-7m2.75-2.75L14.5 18.5l2.75 2.75");
}
</style><path class="nk9qdqb0c"/>`,
		"fallback": "uix-sharp:page-turn",
	});
}

export default Component;
