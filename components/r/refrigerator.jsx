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
		"content": `<style>.txp3_-h5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6A3.5 3.5 0 0 1 18.5 6v12a3.5 3.5 0 0 1-3.5 3.5H9A3.5 3.5 0 0 1 5.5 18V6A3.5 3.5 0 0 1 9 2.5M5.5 9h13M10 6h4m-5.5 6v5");
}
</style><path class="txp3_-h5q"/>`,
		"fallback": "uix:refrigerator",
	});
}

export default Component;
