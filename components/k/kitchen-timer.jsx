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
		"content": `<style>.zy70ybbib {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 13a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0ZM12 5.5v-2m0 9.5V9.5m0 3.5l2.5 1.5");
}
</style><path class="zy70ybbib"/>`,
		"fallback": "uix-sharp:kitchen-timer",
	});
}

export default Component;
