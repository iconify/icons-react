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
		"content": `<style>.g5q88o1yp {
  d: path("M8 7.5h7c1.75 0 1.75 3.5 0 3.5H9.5c-1.75 0-1.75 3.5 0 3.5H15c1.75 0 1.75 3.5 0 3.5h-3v3.5");
}

.q4pbwrz6s {
  d: path("M4.5 21.5V6c0-1.75 1.25-3 3-3h9c1.75 0 3 1.25 3 3v12.5c0 1.75-1.25 3-3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q4pbwrz6s"/><path class="g5q88o1yp"/></g>`,
		"fallback": "uix-sharp:intestines",
	});
}

export default Component;
