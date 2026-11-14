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
		"content": `<style>.t2q3l2i8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5h6l1.5 1.5v4L13 12H7a3.5 3.5 0 0 1 0-7m0 7l-1 7.5h3.5l1-7.5m6.75-6.5q1.75-1 3.75 0m-3.75 3q1.75-1 3.75 0m-3.75 3q1.75-1 3.75 0");
}
</style><path class="t2q3l2i8s"/>`,
		"fallback": "uix:pet-dryer",
	});
}

export default Component;
