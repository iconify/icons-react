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
		"content": `<style>.j2jdgh_nx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4.5H10V10l4 1.5a2.5 2.5 0 0 1 2 2.5v1.5H5.5ZM2.5 19H19q2.5 0 2.5-2.5m-14-1V19m6-3.5V19");
}
</style><path class="j2jdgh_nx"/>`,
		"fallback": "uix-sharp:speed-skate",
	});
}

export default Component;
