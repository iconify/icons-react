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
		"content": `<style>.uwxaurmqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h11L14 6.5h-4ZM10 6.5h4V16l-2 4.5l-2-4.5Zm0 3.5l4-1m-4 4.5l4-1");
}
</style><path class="uwxaurmqq"/>`,
		"fallback": "uix-sharp:screw",
	});
}

export default Component;
