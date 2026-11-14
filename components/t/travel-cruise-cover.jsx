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
		"content": `<style>.qyxghib_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19L19 17H5.5Zm3 0V9H18v3M8 9V6h7v3M9.5 6V3H12v3M3 20.5q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="qyxghib_p"/>`,
		"fallback": "uix-sharp:travel-cruise-cover",
	});
}

export default Component;
