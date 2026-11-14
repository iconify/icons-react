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
		"content": `<style>.r7jtygb4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3L12 13.5L9.5 16h-3a3 3 0 0 1-3-3ZM12 6v4.5");
}
</style><path class="r7jtygb4m"/>`,
		"fallback": "uix-sharp:scuba-mask",
	});
}

export default Component;
