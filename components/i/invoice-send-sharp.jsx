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
		"content": `<style>.p6155gmjl {
  d: path("M13.75 2.75v5.5h5.5m-11 0h2.5M8.25 12h3.5m2.75 0h1.25m-7.5 3h3.5m2.75 0h1.25m-3 3.25h3");
}

.rh2140hgr {
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="p6155gmjl"/></g>`,
		"fallback": "iconoven:invoice-send-sharp",
	});
}

export default Component;
