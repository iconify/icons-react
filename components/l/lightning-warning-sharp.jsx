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
		"content": `<style>.l8zxcjbcn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.56 11.66a2.82 2.82 0 0 1-.39-5.61a4.05 4.05 0 0 1 7.5-.97a3.17 3.17 0 0 1-.42 6.58Zm4.69 2.09L10 17.25h4l-2.5 4m-8.75 0h18.5");
}
</style><path class="l8zxcjbcn"/>`,
		"fallback": "iconoven:lightning-warning-sharp",
	});
}

export default Component;
