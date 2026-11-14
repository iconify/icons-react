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
		"content": `<style>.jtae4gqtc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 3.5H19l-5.5 7H19m-5.5 10l2.75-7l2.75 7M14.5 18H18M7 4v16m-3-3l3 3l3-3");
}
</style><path class="jtae4gqtc"/>`,
		"fallback": "uix-sharp:sort-za",
	});
}

export default Component;
