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
		"content": `<style>.eoiz0rolg {
  d: path("m3 6l6-2.5L15 6l6-2.5V18l-6 2.5L9 18l-6 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vdtk1t8ae {
  d: path("M7 12c0-3 2.5-4.5 5.5-4.5c3 .25 4.5 2 4.25 4.5c-.25 3-2.25 4.75-5.25 4.5S7 14.5 7 12Z");
}

.zq8-gg7ek {
  fill: currentColor;
  d: path("M10.75 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="eoiz0rolg"/><path class="vdtk1t8ae"/><path class="zq8-gg7ek"/></g>`,
		"fallback": "uix-sharp:isochrone-map",
	});
}

export default Component;
