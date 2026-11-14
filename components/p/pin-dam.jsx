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
		"content": `<style>.qbyqi0bsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5h3.5l6 16H10Zm-7.5 16h19M2.5 9Q3.75 8 5 9t2.25 0M2.5 13q1.25-1 2.5 0t2.25 0m6.25-8.5q6.5 0 8 7.5");
}
</style><path class="qbyqi0bsw"/>`,
		"fallback": "uix-sharp:pin-dam",
	});
}

export default Component;
