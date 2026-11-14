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
		"content": `<style>.iwqub4b9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6h7a3.5 3.5 0 0 1 3.5 3.5v2A3.5 3.5 0 0 1 14 15H7a3.5 3.5 0 0 1-3.5-3.5v-2A3.5 3.5 0 0 1 7 6m10.5 2.5l4-2v8l-4-2M9 15v4m-4 0h8");
}
</style><path class="iwqub4b9q"/>`,
		"fallback": "uix:warehouse-camera",
	});
}

export default Component;
