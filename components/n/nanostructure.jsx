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
		"content": `<style>.h4s22dbpt {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0Z");
}

.p_vs6ebsi {
  d: path("m12 8.5l3.25 2.5L14 14.75h-4L8.75 11Zm0 0V3m3.25 8l5.25-1.75m-6.5 5.5l3.25 4.5M10 14.75l-3.25 4.5m2-8.25L3.5 9.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h4s22dbpt"/><path class="p_vs6ebsi"/></g>`,
		"fallback": "uix-sharp:nanostructure",
	});
}

export default Component;
