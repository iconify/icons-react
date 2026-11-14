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
		"content": `<style>.e153e_mvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5h19v5h-19Zm1.75 0c0-4.75 3.5-4.75 3.5 0m2.5 0c0-4.75 3.5-4.75 3.5 0m2.5 0c0-4.75 3.5-4.75 3.5 0");
}
</style><path class="e153e_mvt"/>`,
		"fallback": "uix-sharp:snuffle-mat",
	});
}

export default Component;
