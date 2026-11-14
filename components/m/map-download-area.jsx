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
		"content": `<style>.mubgasbdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6L9 4l6 2l5.5-2v9m-17-7v14L9 18V4m6 2v5m2.5 3v6m-3-2.5l3 3l3-3");
}
</style><path class="mubgasbdr"/>`,
		"fallback": "uix-sharp:map-download-area",
	});
}

export default Component;
