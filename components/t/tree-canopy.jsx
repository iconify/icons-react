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
		"content": `<style>.rqs_y1uoc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 16a4 4 0 0 1-1.5-7.5a5 5 0 0 1 8.5-4a4.5 4.5 0 0 1 5 8.5a3.5 3.5 0 0 1-2 3Zm5 0v5.5m0-2.5l-3-3");
}
</style><path class="rqs_y1uoc"/>`,
		"fallback": "uix-sharp:tree-canopy",
	});
}

export default Component;
