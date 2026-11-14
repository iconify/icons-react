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
		"content": `<style>.d_1y1ob3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9.5l18-5v3l-17 5Zm7.5 1.25V20m3-10.25V20m-8 0h13");
}
</style><path class="d_1y1ob3t"/>`,
		"fallback": "uix-sharp:lectern-podium",
	});
}

export default Component;
