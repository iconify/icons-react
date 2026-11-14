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
		"content": `<style>.d3_0351ap {
  d: path("m14.5 9l3 3l-3 3");
}

.i9ysg0b3h {
  d: path("M2 6h20v12H2Zm3.5 6h12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i9ysg0b3h"/><path class="d3_0351ap"/></g>`,
		"fallback": "uix-sharp:one-way-sign",
	});
}

export default Component;
