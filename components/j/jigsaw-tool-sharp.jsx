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
		"content": `<style>.ps3h4q3zr {
  d: path("M5.5 5h14.75v9H3.75V5z");
}

.rj1lvwbse {
  d: path("M8.25 8H17v2.5H7V8zM6.5 14v3.25m-2.75 0H13M16.25 14v7.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ps3h4q3zr"/><path class="rj1lvwbse"/></g>`,
		"fallback": "iconoven:jigsaw-tool-sharp",
	});
}

export default Component;
