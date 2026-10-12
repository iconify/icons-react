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
		"content": `<style>.dstegoapl {
  d: path("m8.25 4.75l-4 4l4 4");
}

.t370ar8xl {
  d: path("M18.75 20.25v-6.5a5 5 0 0 0-5-5h-9.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t370ar8xl"/><path class="dstegoapl"/></g>`,
		"fallback": "iconoven:turn-left-sharp",
	});
}

export default Component;
