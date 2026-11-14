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
		"content": `<style>.fu_zv-bvl {
  d: path("M7.5 15q1.5-1.25 3 0t3 0t3 0M10 11.5l8-8m-4 8L20.5 5");
}

.s-l-cddke {
  d: path("M3.5 11.5h17a8.5 8.5 0 0 1-17 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s-l-cddke"/><path class="fu_zv-bvl"/></g>`,
		"fallback": "uix-sharp:noodle-shop",
	});
}

export default Component;
