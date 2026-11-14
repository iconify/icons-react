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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nf4v0kbyf {
  d: path("M7 9.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-1.25 6.5c0-1.25 1.25-2 3-2s3 .75 3 2m3-6.75h3.75m-4 5q1-1.25 2 0t2 0");
}

.poz_fvbbz {
  d: path("M6.875 5h10.25A4.375 4.375 0 0 1 21.5 9.375v5.25A4.375 4.375 0 0 1 17.125 19H6.875A4.375 4.375 0 0 1 2.5 14.625v-5.25A4.375 4.375 0 0 1 6.875 5");
}
</style><g class="hntgybcog"><path class="poz_fvbbz"/><path class="nf4v0kbyf"/></g>`,
		"fallback": "uix:seafarer-id",
	});
}

export default Component;
