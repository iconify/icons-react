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
		"content": `<style>.jds4-jbzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 19.5h20m-19.25 0v-10Q2.75 8 4 8V5.5h1.75V8Q7 8 7 9.5v10m2.75 0v-10Q9.75 8 11 8V5.5h1.75V8Q14 8 14 9.5v10m2.75 0v-10Q16.75 8 18 8V5.5h1.75V8Q21 8 21 9.5v10");
}
</style><path class="jds4-jbzl"/>`,
		"fallback": "uix-sharp:pharmacy-shelf",
	});
}

export default Component;
