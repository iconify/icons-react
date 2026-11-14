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
		"content": `<style>.r6o7-vgsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM2.5 20.5c0-4 2.5-6 6-6s6 2 6 6M14.75 7a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM16 13.25c3.5 0 5.5 2.25 5.5 6.25");
}
</style><path class="r6o7-vgsp"/>`,
		"fallback": "uix-sharp:resource-pool",
	});
}

export default Component;
