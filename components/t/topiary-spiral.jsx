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
		"content": `<style>.s7lnyyq5r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l6 12H6Zm-2 4l5.5 3m-7.25.5l9 3M12 14.5V17m-4 0h8l-1 4H9Z");
}
</style><path class="s7lnyyq5r"/>`,
		"fallback": "uix-sharp:topiary-spiral",
	});
}

export default Component;
