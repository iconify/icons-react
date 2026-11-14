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
		"content": `<style>.al37t7bdv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3h12v7.5H4Zm12 2.5l4-2V10l-4-2Zm-6 5v11m0-7.5l-5 7.5m5-7.5l5 7.5");
}
</style><path class="al37t7bdv"/>`,
		"fallback": "uix-sharp:pedestal-camera",
	});
}

export default Component;
