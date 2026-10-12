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
		"content": `<style>.cu8bi9byw {
  d: path("M9.5 12.5V9m2.5 3V7.5m2.5 5v-4m-5 4v2a3 3 0 0 0 3 3h2V13m-5 .5L7.75 12");
}

.itxcm0bbl {
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><path class="cu8bi9byw"/></g>`,
		"fallback": "iconoven:keep-out-sharp",
	});
}

export default Component;
