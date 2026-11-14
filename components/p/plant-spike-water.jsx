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
		"content": `<style>.ms0kzut0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3h11L10 19Zm1.25 3.75h8.5m4.25 6.75s3 3.25 3 5a3 3 0 0 1-6 0c0-1.75 3-5 3-5Z");
}
</style><path class="ms0kzut0q"/>`,
		"fallback": "uix-sharp:plant-spike-water",
	});
}

export default Component;
