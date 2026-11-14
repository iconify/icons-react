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
		"content": `<style>.h3a0_5brx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h6V7h-6Zm13 0h6V7h-6ZM5.5 7v14.5M18.5 7v14.5m-13-9h13m-2.75-2.75l2.75 2.75l-2.75 2.75m2.75 3.25h-13m2.75-2.75L5.5 18.5l2.75 2.75");
}
</style><path class="h3a0_5brx"/>`,
		"fallback": "uix-sharp:sequence-diagram",
	});
}

export default Component;
