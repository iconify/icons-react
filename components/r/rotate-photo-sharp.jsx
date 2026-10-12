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
		"content": `<style>.nx02e6ksh {
  d: path("m2.75 18.25l3.5-3.5L10.5 19m-1-1l1.5-1.5l3.75 3.75m-2-16.5A6.25 6.25 0 0 1 19 10v2.25M16.75 10L19 12.25L21.25 10");
}

.wp-gahbef {
  d: path("M2.75 9.25h12v12h-12z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wp-gahbef"/><path class="nx02e6ksh"/></g>`,
		"fallback": "iconoven:rotate-photo-sharp",
	});
}

export default Component;
