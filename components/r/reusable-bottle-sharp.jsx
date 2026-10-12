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
		"content": `<style>.kzknetbll {
  d: path("M9.5 17.75c.2-2.8 1.6-4.4 4.75-5c-.2 2.8-1.6 4.4-4.75 5Z");
}

.vuwyb95-t {
  d: path("M9 2.75h6V6H9zM9.5 6h5v.5l2.75 1.179V21.25H6.75V7.679L9.5 6.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vuwyb95-t"/><path class="kzknetbll"/></g>`,
		"fallback": "iconoven:reusable-bottle-sharp",
	});
}

export default Component;
