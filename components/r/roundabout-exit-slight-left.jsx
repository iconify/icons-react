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
		"content": `<style>.apv_zrbsu {
  d: path("M9 3.5H5.75v3.25m7.5 9.25a5 5 0 0 1-5-5.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-r2pdbdd {
  d: path("M13.25 21.5V16a5 5 0 1 0-3.5-8.5l-4-4");
}
</style><g class="ulnmmdpxh"><path class="y-r2pdbdd"/><path class="apv_zrbsu"/></g>`,
		"fallback": "uix-sharp:roundabout-exit-slight-left",
	});
}

export default Component;
