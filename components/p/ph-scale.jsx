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
		"content": `<style>.q7ltjacwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.75h19v6h-19Zm6.25 0v6m6.5-6v6M9.5 5.25h5l-2.5 4Z");
}
</style><path class="q7ltjacwi"/>`,
		"fallback": "uix-sharp:ph-scale",
	});
}

export default Component;
