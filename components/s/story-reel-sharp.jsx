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
		"content": `<style>.hqvg4vj_x {
  d: path("M5.25 2.75h13.5v18.5H5.25zm3.25 3.5h2m3 0h2");
}

.v9939lliu {
  d: path("m10.84 11.13l3.07 1.99l.59.38l-.59.38l-3.07 1.99l-.59.38v-5.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hqvg4vj_x"/><path class="v9939lliu"/></g>`,
		"fallback": "iconoven:story-reel-sharp",
	});
}

export default Component;
