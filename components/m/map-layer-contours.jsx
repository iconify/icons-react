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
		"content": `<style>.edw-geb1y {
  d: path("M8.25 11c0-3.25 2.75-5 5.25-5c3 0 4.75 1.5 4.75 4c0 3-1.25 5.5-4.5 5.5S8.25 14 8.25 11Z");
}

.n75s6jz1u {
  d: path("M11.75 10.75c0-1.25 1-1.75 2-1.75s1.5.75 1.5 1.5c0 1-.75 1.5-1.75 1.5s-1.75-.25-1.75-1.25Z");
}

.sg61gcard {
  d: path("M3 13C3 7.5 6.5 3 12.5 3C18 3 21 5.5 21 10c0 4-.5 11-6.5 11C8 21 3 18.5 3 13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sg61gcard"/><path class="edw-geb1y"/><path class="n75s6jz1u"/></g>`,
		"fallback": "uix-sharp:map-layer-contours",
	});
}

export default Component;
