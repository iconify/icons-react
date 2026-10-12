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
		"content": `<style>.k1b4hqciy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.34 6.13l15.32-3.26l.59-.12v4l-.59.08L4.34 8.92L3.75 9V6.25zM12 7.88v3.37m0 7.5v2.5m-5 0h10m-8.75-10h7.5v7.5h-7.5zm3.75 2.5v2.5m-1-1.5h2");
}
</style><path class="k1b4hqciy"/>`,
		"fallback": "iconoven:sermon-podium-sharp",
	});
}

export default Component;
