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
		"content": `<style>.ekhlz2b6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 9.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM3 21c0-3.5 2.75-5.5 6-5.5s6 2 6 5.5ZM13.75 3.469a3.5 3.5 0 0 1 2.947-.258m2.092 2.092a3.5 3.5 0 0 1-.258 2.947m-1.031 5q1.875.375 3 1.5m1 2.75V19");
}
</style><path class="ekhlz2b6x"/>`,
		"fallback": "uix-sharp:job-shadowing",
	});
}

export default Component;
