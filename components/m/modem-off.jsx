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
		"content": `<style>.hv4lmkb3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.1 19H2.5v-9h3.6m7.8 0h7.6v7.6m-7-7.6V4m4 6V4m-12 10.5h.01m2.99 0h.01M3.5 3.5l17 17");
}
</style><path class="hv4lmkb3d"/>`,
		"fallback": "uix-sharp:modem-off",
	});
}

export default Component;
