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
		"content": `<style>.pdh8cug_u {
  d: path("M8.19 16.05h-.399l-.281-.25c-2.05-1.7-4.74-3.87-4.74-6.78c0-1.68 1.27-3.04 2.88-3.04h1.465L8.19 7.34l1.075-1.36h1.465c1.61 0 2.88 1.36 2.88 3.04c0 2.91-2.7 5.08-4.74 6.79l-.317.25H8.19Z");
}

.uulplbcgs {
  d: path("M15.84 18.05h-.399l-.281-.25c-2.05-1.7-4.74-3.87-4.74-6.78c0-1.68 1.27-3.04 2.88-3.04h1.465l1.075 1.36l1.075-1.36h1.465c1.61 0 2.88 1.36 2.88 3.04c0 2.91-2.7 5.08-4.74 6.79l-.317.25h-.363Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pdh8cug_u"/><path class="uulplbcgs"/></g>`,
		"fallback": "iconoven:two-hearts-sharp",
	});
}

export default Component;
