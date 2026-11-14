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
		"content": `<style>.m85e346kk {
  d: path("M6.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.omj5d9bvx {
  d: path("M2.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Zm11 0h3m0-3h5v6h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="omj5d9bvx"/><path class="m85e346kk"/></g>`,
		"fallback": "uix-sharp:retractable-leash",
	});
}

export default Component;
