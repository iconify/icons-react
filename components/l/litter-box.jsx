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
		"content": `<style>.n-x42g4av {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h19l-1.75 8H4.25ZM5 10c1-4 5.5-4.5 7.5 0");
}
</style><path class="n-x42g4av"/>`,
		"fallback": "uix-sharp:litter-box",
	});
}

export default Component;
