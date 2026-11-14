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
		"content": `<style>.f4gs2kb3t {
  d: path("M6.5 8.5c2.5-1.75 8.5-1.75 11 0c1.5 1 1.5 6.5 0 7.5c-2 1.5-4.25 1.25-5.5-.5c-1.25 1.75-3.5 2-5.5.5C5 15 5 9.5 6.5 8.5Zm-4 3.75h3m13 0h3");
}

.gjft2gz7m {
  d: path("M7.75 11.5q1.5 1.5 3 0m2.5 0q1.5 1.5 3 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f4gs2kb3t"/><path class="gjft2gz7m"/></g>`,
		"fallback": "uix-sharp:sleep-mask",
	});
}

export default Component;
