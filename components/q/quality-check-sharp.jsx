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
		"content": `<style>.ei3bm2bst {
  d: path("m15.5 16.85l.9.9l1.6-1.8m1.25 3.3l2 2");
}

.iwhwprfff {
  d: path("M10.43 18.25H2.75V2.75h15.5v7.68a6.5 6.5 0 0 0-7.82 7.82Z");
}

.ubxiqqbhz {
  cx: 16.75px;
  cy: 16.75px;
  r: 3.5px;
}

.w9zpg8nyg {
  d: path("M8.75 2.75v4h3.5v-4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="iwhwprfff"/><path class="w9zpg8nyg"/><circle class="ubxiqqbhz"/><path class="ei3bm2bst"/></g>`,
		"fallback": "iconoven:quality-check-sharp",
	});
}

export default Component;
