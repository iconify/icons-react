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
		"content": `<style>.qiwxktbri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12.75h18.5v7.5H2.75zm3.5 0v2.75m3.25-2.75v1.75m3.25-1.75v2.75M16 12.75v1.75M5.25 3.75h10.5l4.75 2.5l-4.75 2.5H3.25v-5z");
}
</style><path class="qiwxktbri"/>`,
		"fallback": "iconoven:ruler-school-sharp",
	});
}

export default Component;
