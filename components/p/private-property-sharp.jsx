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
		"content": `<style>.h52mu2spc {
  d: path("M5.75 18.25V11L12 5.75L18.25 11v7.25Z");
}

.itxcm0bbl {
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.w5c1s94io {
  d: path("M10 12.75h4v2.5h-4Zm.75 0v-2h2.5v2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><path class="h52mu2spc"/><path class="w5c1s94io"/></g>`,
		"fallback": "iconoven:private-property-sharp",
	});
}

export default Component;
