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
		"content": `<style>.y91j_45jh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 3.5l11.5 5.75l-5 1.5l-1.75 5Zm11.5 12h5v5h-5Z");
}
</style><path class="y91j_45jh"/>`,
		"fallback": "uix-sharp:selection-direct",
	});
}

export default Component;
