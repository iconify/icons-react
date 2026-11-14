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
		"content": `<style>.eh27umomo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.198 13H2.5L6 3h13.5l-1.647 8.237M10 13v7.5M4.25 8H18.5m-8-5l-3 10M15 3l-2.5 10m5.5 8v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="eh27umomo"/>`,
		"fallback": "uix-sharp:solar-production",
	});
}

export default Component;
