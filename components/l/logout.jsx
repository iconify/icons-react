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
		"content": `<style>.mcavako3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 6V4.5a2 2 0 0 0-2-2H5.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2H11a2 2 0 0 0 2-2V18m-5-6h13m-3.5-3.5L21 12l-3.5 3.5");
}
</style><path class="mcavako3t"/>`,
		"fallback": "uix-sharp:logout",
	});
}

export default Component;
