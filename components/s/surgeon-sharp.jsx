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
		"content": `<style>.fozegjbod {
  d: path("M3.75 14a8.25 8.25 0 0 1 16.5 0Z");
}

.pxoxu8b2y {
  d: path("M9 7.5c.5 2 .75 4 .75 6.5M15 7.5c-.5 2-.75 4-.75 6.5m-11.5 0h18.5v3.5H2.75zm13.75 3.5l1.5 3.75m-3.75-3.75l.25 3.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fozegjbod"/><path class="pxoxu8b2y"/></g>`,
		"fallback": "iconoven:surgeon-sharp",
	});
}

export default Component;
