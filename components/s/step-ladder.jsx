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
		"content": `<style>.hp9av5q_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21.5L10 3m4 0l6 18.5M9.5 3h5M8 9h5m-7 6h9");
}
</style><path class="hp9av5q_x"/>`,
		"fallback": "uix-sharp:step-ladder",
	});
}

export default Component;
