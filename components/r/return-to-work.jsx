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
		"content": `<style>.aefj23ssx {
  d: path("m8 10l2 2l2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y1ek1lbvh {
  d: path("M14 4.5h5V12h-5Zm-1 10.25h7m-3.5 0v4.75m-3 0h6m-6 2.25h.01m5.99 0h.01M3 19.5v-11a3.5 3.5 0 0 1 7 0V12");
}
</style><g class="ulnmmdpxh"><path class="y1ek1lbvh"/><path class="aefj23ssx"/></g>`,
		"fallback": "uix-sharp:return-to-work",
	});
}

export default Component;
