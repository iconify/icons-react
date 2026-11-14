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
		"content": `<style>.lvmmffbxh {
  d: path("M15.25 5.25c-.65-1-1.75-1.5-3.25-1.5c-1.9 0-3.25.95-3.25 2.5c0 3.25 6.5 3.25 6.5 7c0 1.35-1 2.35-2.5 2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wd4u1ln4i {
  d: path("M8.75 18.75c.65 1 1.75 1.5 3.25 1.5c1.9 0 3.25-.95 3.25-2.5c0-3.25-6.5-3.25-6.5-7c0-1.35 1-2.35 2.5-2.75");
}
</style><g class="ulnmmdpxh"><path class="lvmmffbxh"/><path class="wd4u1ln4i"/></g>`,
		"fallback": "uix-sharp:section-sign",
	});
}

export default Component;
