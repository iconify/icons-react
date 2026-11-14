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
		"content": `<style>.qz_bnctsg {
  d: path("m5 6l3.5-3.5H19V18l-3.5 3.5m0-15.5L19 2.5");
}

.rot9v-wqs {
  d: path("M5 6h10.5v15.5H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rot9v-wqs"/><path class="qz_bnctsg"/></g>`,
		"fallback": "uix-sharp:monolith",
	});
}

export default Component;
