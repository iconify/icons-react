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
		"content": `<style>.jl5dnwbke {
  d: path("M7.5 3.5C5 3.5 4 5.5 4 8s1 4 1.5 6.5l1 5c.25 1.25 1.75 1.25 2 0l1-4.5c.25-1 1.25-1.5 2.5-1.5s2.25.5 2.5 1.5l1 4.5c.25 1.25 1.75 1.25 2 0l1-5C19 12 20 10.5 20 8s-1-4.5-3.5-4.5c-2 0-3 1-4.5 1s-2.5-1-4.5-1Z");
}

.l4e7w_d8x {
  d: path("m13 7l-2.5 4H13l-2 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jl5dnwbke"/><path class="l4e7w_d8x"/></g>`,
		"fallback": "uix-sharp:toothache",
	});
}

export default Component;
