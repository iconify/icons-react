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
		"content": `<style>.xnfm0xyju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 2.5H21V8h-8.5ZM16.75 8v13.5m-14.25 0h19M7 21.5V16c-.25-2.75-2-4.5-4.25-4.5C2.75 14 4.5 16 7 16c.25-3 2-5 4.5-5c0 2.75-1.75 5-4.5 5");
}
</style><path class="xnfm0xyju"/>`,
		"fallback": "uix-sharp:plant-label-stake",
	});
}

export default Component;
