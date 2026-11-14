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
		"content": `<style>.zm3_3jsyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 20V4M4.5 7.5L8 4l3.5 3.5M16 4v16m-3.5-3.5L16 20l3.5-3.5");
}
</style><path class="zm3_3jsyp"/>`,
		"fallback": "uix-sharp:mobile-data",
	});
}

export default Component;
