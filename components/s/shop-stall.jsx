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
		"content": `<style>.hyp47d8kn {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0M5 16.5h14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vse3035bm {
  d: path("m3 9l1.5-5h15L21 9M5 12v9m14-9v9");
}
</style><g class="ulnmmdpxh"><path class="vse3035bm"/><path class="hyp47d8kn"/></g>`,
		"fallback": "uix-sharp:shop-stall",
	});
}

export default Component;
