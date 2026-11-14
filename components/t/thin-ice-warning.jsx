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
		"content": `<style>.ghdo6iddw {
  d: path("M15.2 16H2.5L6 4h15.5l-2.24 7.68");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w58075boy {
  d: path("m12 4l-1.5 4l3 3l-2 5m6.5-1.5V18m0 3h.01");
}
</style><g class="ulnmmdpxh"><path class="ghdo6iddw"/><path class="w58075boy"/></g>`,
		"fallback": "uix-sharp:thin-ice-warning",
	});
}

export default Component;
