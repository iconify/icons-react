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
		"content": `<style>.e5tusrb0t {
  d: path("M7.25 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0h5m-1.5 0v2.25");
}

.s1r9cubcf {
  d: path("M5.5 15.75A7.5 7.5 0 0 1 12 4.5l-2-2m2 2l-2 2m8.5 1.75A7.5 7.5 0 0 1 12 19.5l2-2m-2 2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s1r9cubcf"/><path class="e5tusrb0t"/></g>`,
		"fallback": "uix-sharp:secret-rotation",
	});
}

export default Component;
