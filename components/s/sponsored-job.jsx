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
		"content": `<style>.isipxacuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 2.5h10.5A1.75 1.75 0 0 1 19 4.25v5.5a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 9.75v-5.5A1.75 1.75 0 0 1 6.75 2.5M8 6h8M8 8.75h5m-1 5c1.75 1.5 2.25 3.75 1.75 5.5h-3.5c-.5-1.75 0-4 1.75-5.5M10.25 18l-1.5 1.75m5-1.75l1.5 1.75M12 20.5v1");
}
</style><path class="isipxacuy"/>`,
		"fallback": "uix:sponsored-job",
	});
}

export default Component;
