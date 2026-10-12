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
		"content": `<style>.l12b8cbxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 3.75h-2.25a4.5 4.5 0 0 0 0 9H13Zm0 0v16.5m0-16.5h4.75m0 0v16.5");
}
</style><path class="l12b8cbxp"/>`,
		"fallback": "iconoven:paragraph-sharp",
	});
}

export default Component;
