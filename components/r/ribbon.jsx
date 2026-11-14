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
		"content": `<style>.ok6fhgywu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21L14 9c1-1.6.5-3.5-1-4.5c-.75-.5-1.25-.5-2 0c-1.5 1-2 2.9-1 4.5l7.5 12");
}
</style><path class="ok6fhgywu"/>`,
		"fallback": "uix-sharp:ribbon",
	});
}

export default Component;
