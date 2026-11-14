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
		"content": `<style>.hv9kgw6dy {
  d: path("M21 12.567V4.5q-6-.75-9 1.5q-3-2.25-9-1.5v14q5.497-.687 8.475 1.144M12 6v5.4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z6m01vbxe {
  d: path("M14.25 14.25h4.5L22 17.5L17.5 22l-3.25-3.25Z");
}
</style><g class="ulnmmdpxh"><path class="hv9kgw6dy"/><path class="z6m01vbxe"/></g>`,
		"fallback": "uix-sharp:product-price-book",
	});
}

export default Component;
