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
		"content": `<style>.n-n9s3bgf {
  d: path("M9 12.25c0-5.75 8-5.75 8 0M6.75 16L3.5 12.5m.25-2.75c-1-1.5 1-3 0-4.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wk850tbgm {
  d: path("M6 20.5C6 14 8.5 11 13 11s7 3 7 9.5Z");
}
</style><g class="ulnmmdpxh"><path class="wk850tbgm"/><path class="n-n9s3bgf"/></g>`,
		"fallback": "uix-sharp:stovetop-kettle",
	});
}

export default Component;
