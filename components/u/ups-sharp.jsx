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
		"content": `<style>.kupfe8ior {
  d: path("M5 2.75h14v18.5H5zm3.5 3h7");
}

.l1gzk17yp {
  d: path("m13 9.5l-3 4.25h4L11 18");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kupfe8ior"/><path class="l1gzk17yp"/></g>`,
		"fallback": "iconoven:ups-sharp",
	});
}

export default Component;
