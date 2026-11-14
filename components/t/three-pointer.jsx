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
		"content": `<style>.iowomobhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.5 3v11M9 11h11.5M10 11l1.5 9.5h5L18 11M3.5 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="iowomobhh"/>`,
		"fallback": "uix-sharp:three-pointer",
	});
}

export default Component;
