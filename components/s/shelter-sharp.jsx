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
		"content": `<style>.eknilkb-t {
  d: path("m12.6 4.59l8.05 14.57l.6 1.09H2.75l.6-1.09L11.4 4.59L12 3.5z");
}

.k08upyb9l {
  d: path("m12 11.5l3.5 8.75h-7Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="eknilkb-t"/><path class="k08upyb9l"/></g>`,
		"fallback": "iconoven:shelter-sharp",
	});
}

export default Component;
