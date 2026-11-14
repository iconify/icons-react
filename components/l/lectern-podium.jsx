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
		"content": `<style>.f04pnvbkm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.521 9.078l15.034-4.177A1.14 1.14 0 0 1 21 6v.378a1.5 1.5 0 0 1-1.077 1.439L5.389 12.092a1.5 1.5 0 0 1-1.847-.965l-.043-.13a1.5 1.5 0 0 1 1.022-1.919M10.5 10.75V20m3-10.25V20m-8 0h13");
}
</style><path class="f04pnvbkm"/>`,
		"fallback": "uix:lectern-podium",
	});
}

export default Component;
