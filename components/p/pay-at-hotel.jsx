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
		"content": `<style>.e-z2e4njp {
  d: path("M11.4 17.5H2.5v-14h19V14m-19-6h19M6 13h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_c2yubrz {
  d: path("M14.25 18L18 14.5l3.75 3.5v3.75h-7.5Z");
}
</style><g class="ulnmmdpxh"><path class="e-z2e4njp"/><path class="x_c2yubrz"/></g>`,
		"fallback": "uix-sharp:pay-at-hotel",
	});
}

export default Component;
