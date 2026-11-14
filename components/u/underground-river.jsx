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
		"content": `<style>.dgro9ib7n {
  d: path("M4 20v-7a8 8 0 0 1 16 0v7M2.5 20h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vkjzt8oaq {
  d: path("M7.5 12.5q1.5-1 3 0t3 0t3 0m-9 4q1.5-1 3 0t3 0t3 0");
}
</style><g class="ulnmmdpxh"><path class="dgro9ib7n"/><path class="vkjzt8oaq"/></g>`,
		"fallback": "uix-sharp:underground-river",
	});
}

export default Component;
