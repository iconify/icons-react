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
		"content": `<style>.btvbdcc2d {
  d: path("M12 16.5q3-6.75 9-7.5c-1.25 4.25-4.5 7-9 7.5Zm0 0Q9 9.75 3 9c1.25 4.25 4.5 7 9 7.5Zm0 0v5");
}

.m9p6bmfvh {
  d: path("M12 16.5c-2.75-4-2.75-9.5 0-14c2.75 4.5 2.75 10 0 14Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m9p6bmfvh"/><path class="btvbdcc2d"/></g>`,
		"fallback": "uix-sharp:leaf-cluster",
	});
}

export default Component;
