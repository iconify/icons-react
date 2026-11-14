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
		"content": `<style>.as1udnfzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3h4v4l3 3v9.5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V10l3-3Zm0 9.75l4 4m0-4l-4 4");
}
</style><path class="as1udnfzp"/>`,
		"fallback": "uix-sharp:poison-control",
	});
}

export default Component;
