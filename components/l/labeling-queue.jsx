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
		"content": `<style>.lgnso_rba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 4.75H21M10.5 12H21m-10.5 7.25H21M2.5 2.5H5l2 2.25L5 7H2.5Zm0 7.25H5L7 12l-2 2.25H2.5Zm0 7.25H5l2 2.25l-2 2.25H2.5Z");
}
</style><path class="lgnso_rba"/>`,
		"fallback": "uix-sharp:labeling-queue",
	});
}

export default Component;
