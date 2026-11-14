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
		"content": `<style>.zje8mu-nf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10V7H7ZM12 7v14.5m-5 0l5-6.5l5 6.5M6.5 9.75l-2 2.5m13-2.5l2 2.5");
}
</style><path class="zje8mu-nf"/>`,
		"fallback": "uix-sharp:lighting-tower",
	});
}

export default Component;
