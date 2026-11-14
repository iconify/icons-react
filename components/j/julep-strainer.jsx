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
		"content": `<style>.uwi8jj3lg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm-4.5 0H7m4.25-2.5v5m2.75-6v7m2.75-6v5");
}
</style><path class="uwi8jj3lg"/>`,
		"fallback": "uix-sharp:julep-strainer",
	});
}

export default Component;
