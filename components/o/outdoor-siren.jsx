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
		"content": `<style>.gjws-xr1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 17v-4a5 5 0 0 1 10 0v4M4.5 17h15v4h-15ZM12 2.5V5M4 6l1.75 1.75M20 6l-1.75 1.75");
}
</style><path class="gjws-xr1m"/>`,
		"fallback": "uix-sharp:outdoor-siren",
	});
}

export default Component;
