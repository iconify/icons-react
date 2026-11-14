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
		"content": `<style>.o1bjvqbyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 8a3.5 3.5 0 0 1 7 0m-11 0h2m11 0h2M8 4L6.75 2.75M16 4l1.25-1.25M12 11.5v7.75M12 16c0-2.5-2-4-5-4c0 2.5 2 4 5 4Zm0-1c0-2.5 2-4 5-4c0 2.5-2 4-5 4Zm-7.5 6.5c2.5-3 12.5-3 15 0");
}
</style><path class="o1bjvqbyp"/>`,
		"fallback": "uix-sharp:sun-crop",
	});
}

export default Component;
