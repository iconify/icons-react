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
		"content": `<style>.e-tqq7b4t {
  d: path("M8.5 2.5h5v4h-5ZM6 6.5h10v15H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wj2glggjp {
  d: path("M8.75 10h4.5v7.5h-4.5Zm0 4.5h4.5m3.25-10h.01m2.99-1.75A3.5 3.5 0 0 1 19 7");
}
</style><g class="ulnmmdpxh"><path class="e-tqq7b4t"/><path class="wj2glggjp"/></g>`,
		"fallback": "uix-sharp:smart-bottle",
	});
}

export default Component;
