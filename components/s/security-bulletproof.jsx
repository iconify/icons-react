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
		"content": `<style>.dkeod_bvf {
  d: path("M10 11L9 8.5l1.5-3m1 6.5l3-1.5l3 .5M11 13.75l2.5 1.75l1 3m-6-5.5L6 15.5L5.5 18m3-6l-3-2.5m9.5-4h3.5M17 8h1.5");
}

.f2o9vffkz {
  d: path("M8.5 12.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.g6ulkabjn {
  d: path("M2.5 2.5h19v19h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6ulkabjn"/><path class="f2o9vffkz"/><path class="dkeod_bvf"/></g>`,
		"fallback": "uix-sharp:security-bulletproof",
	});
}

export default Component;
