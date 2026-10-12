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
		"content": `<style>.giy7otbon {
  d: path("M7.25 7.25h9.5v14h-9.5z");
}

.te6sr_b0j {
  d: path("M9.75 12.25L12 10l2.25 2.25m-4.5 4L12 18.5l2.25-2.25m-5-12L12 1.646l2.75 2.604");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="giy7otbon"/><path class="te6sr_b0j"/></g>`,
		"fallback": "iconoven:presentation-remote-sharp",
	});
}

export default Component;
