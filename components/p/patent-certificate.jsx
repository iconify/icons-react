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
		"content": `<style>.h21r3j6vl {
  d: path("M6.5 17.5h-2v-15h15v15h-2M8.5 6h7m-7 3.5H13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yol9b_wkz {
  d: path("M10.25 18a3 3 0 1 1 3.5 0l1 3.5L12 20.25L9.25 21.5Z");
}
</style><g class="ulnmmdpxh"><path class="h21r3j6vl"/><path class="yol9b_wkz"/></g>`,
		"fallback": "uix-sharp:patent-certificate",
	});
}

export default Component;
