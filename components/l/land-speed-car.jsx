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
		"content": `<style>.mu7433cru {
  d: path("M4.5 16a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zx4m8fbtd {
  d: path("M2.5 14V6.5L6 10h3.5a2.5 2.5 0 0 1 5 0l7 3l-1 1Z");
}
</style><g class="ulnmmdpxh"><path class="zx4m8fbtd"/><path class="mu7433cru"/></g>`,
		"fallback": "uix-sharp:land-speed-car",
	});
}

export default Component;
