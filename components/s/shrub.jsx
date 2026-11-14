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
		"content": `<style>.crvp5sghg {
  d: path("M3 19c-1-2.5-.5-5.5 2-6.5c-.5-3.5 2.5-6 5.5-5C12 5 16 5 17.5 8c2.5.5 4 3 3 5.5c1.5 2 1 4.5 0 5.5Z");
}

.ov7e4bc4z {
  d: path("M7.5 15.5q1-2.5 3.5-3m2.5 3q2.5-.5 3.5-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="crvp5sghg"/><path class="ov7e4bc4z"/></g>`,
		"fallback": "uix-sharp:shrub",
	});
}

export default Component;
