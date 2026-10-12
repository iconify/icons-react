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
		"content": `<style>.o93bxhbfb {
  d: path("m13.25 12.25l1.5 1.5l3-3");
}

.ttv105gdf {
  d: path("M9.75 5.25h-7v13.5h7Zm0 0h11.5v13.5H9.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ttv105gdf"/><path class="o93bxhbfb"/></g>`,
		"fallback": "iconoven:validation-split-sharp",
	});
}

export default Component;
