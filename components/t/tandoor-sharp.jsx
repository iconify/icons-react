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
		"content": `<style>.djjzv1bri {
  d: path("M10.5 21.25V18.5h3v2.75m-7-6.75c3.5 1 7.5 1 11 0");
}

.nl_g22b1p {
  d: path("M8.75 9h6.5c2.5 2 4.5 5 4.5 8.75v3.5H4.25v-3.5c0-3.75 2-6.75 4.5-8.75ZM12 2.75l1.5 1.275V5a1.5 1.5 0 0 1-3 0v-.975z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nl_g22b1p"/><path class="djjzv1bri"/></g>`,
		"fallback": "iconoven:tandoor-sharp",
	});
}

export default Component;
