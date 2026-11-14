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
		"content": `<style>.tqzx1eb1i {
  d: path("M3 21.5v-10c0-5 4-9 9-9s9 4 9 9v10m-19 0h20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vm5dgib_v {
  d: path("M10.75 7.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM12 11.25l-1 3.5M8.75 18.5L11 14.75l2.5 3.75m-4.25-5.25l2.5-1.5l2.5 1.25");
}
</style><g class="ulnmmdpxh"><path class="tqzx1eb1i"/><path class="vm5dgib_v"/></g>`,
		"fallback": "uix-sharp:pedestrian-underpass",
	});
}

export default Component;
