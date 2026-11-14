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
		"content": `<style>.b9y6dyb9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6h9v13H4ZM2.5 19h19m0-6.5h-5M19 10l-2.5 2.5L19 15");
}
</style><path class="b9y6dyb9q"/>`,
		"fallback": "uix-sharp:view-side",
	});
}

export default Component;
