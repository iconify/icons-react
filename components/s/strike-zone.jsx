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
		"content": `<style>.fpnv9fnph {
  d: path("M7 2.5h10v10H7Zm-2.5 13h15V18L12 21.5L4.5 18Z");
}

.k7dr3dbje {
  d: path("M10 7.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fpnv9fnph"/><path class="k7dr3dbje"/></g>`,
		"fallback": "uix-sharp:strike-zone",
	});
}

export default Component;
