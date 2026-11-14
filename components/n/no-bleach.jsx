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
		"content": `<style>.x74skzbhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.375 6.389L12 3.5l5.883 10.459M15.558 19.5H3l4.531-8.055M3.5 3.5l17 17");
}
</style><path class="x74skzbhn"/>`,
		"fallback": "uix-sharp:no-bleach",
	});
}

export default Component;
