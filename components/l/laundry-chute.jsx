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
		"content": `<style>.epee33vep {
  d: path("M9 5.5h6V10H9Zm3 7.5v5.75m-2.5-2.5l2.5 2.5l2.5-2.5");
}

.k6vsj82gb {
  d: path("M6.5 2.5h11a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k6vsj82gb"/><path class="epee33vep"/></g>`,
		"fallback": "uix-sharp:laundry-chute",
	});
}

export default Component;
