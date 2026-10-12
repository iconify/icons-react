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
		"content": `<style>.nhq8fvk0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.25h15.75V16.5h-4.5v-7H7.5v2H3.75V4.25zm.5 7.25V16m13-9.25v7.5m-15.75 4.5h18.5v2.5H2.75z");
}
</style><path class="nhq8fvk0j"/>`,
		"fallback": "iconoven:sewing-machine-sharp",
	});
}

export default Component;
