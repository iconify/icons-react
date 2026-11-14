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
		"content": `<style>.mgxd3-bnd {
  d: path("M4 13.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xabw3fv9h {
  d: path("M10 5.75C9 2 15 2 14 5.75M8 10.5q2-1.5 4 0t4 0m-9 3q2.5-1.5 5 0t5 0m-9 3q2-1.5 4 0t4 0");
}
</style><g class="ulnmmdpxh"><path class="mgxd3-bnd"/><path class="xabw3fv9h"/></g>`,
		"fallback": "uix-sharp:loofah",
	});
}

export default Component;
