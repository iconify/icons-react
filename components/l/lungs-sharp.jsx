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
		"content": `<style>.q2nz25wih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 8.25V21h-6.5v-4.25c0-4.5 2.15-9 4.5-10.4l2-1.2v2.6Zm5.5 0V21h6.5v-4.25c0-4.5-2.15-9-4.5-10.4l-2-1.2v2.6ZM12 2.75v9.757l-2.75.743m2.75-3v2.257l2.75.743");
}
</style><path class="q2nz25wih"/>`,
		"fallback": "iconoven:lungs-sharp",
	});
}

export default Component;
