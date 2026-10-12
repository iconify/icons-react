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
		"content": `<style>.fvdas8ylf {
  d: path("M8.75 15.25c0-4.25 2.25-6.5 6.5-6.5c0 4.25-2.25 6.5-6.5 6.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zpnpfkblo {
  d: path("M4.01 9.09a8.5 8.5 0 0 1 15.98 0m-2.04-.95l2.04.95l.95-2.04m-.95 7.86a8.5 8.5 0 0 1-15.98 0m2.04.95l-2.04-.95l-.95 2.04");
}
</style><g class="x2cwu0gfd"><path class="zpnpfkblo"/><path class="fvdas8ylf"/></g>`,
		"fallback": "iconoven:season-cycle-sharp",
	});
}

export default Component;
