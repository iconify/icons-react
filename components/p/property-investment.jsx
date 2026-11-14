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
		"content": `<style>.dr10rxbvt {
  d: path("M11.4 20.5H2.5V7h19v7m-13-7V5A1.5 1.5 0 0 1 10 3.5h4A1.5 1.5 0 0 1 15.5 5v2m-13 5h14.1m2.8 0h2.1");
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
</style><g class="ulnmmdpxh"><path class="dr10rxbvt"/><path class="x_c2yubrz"/></g>`,
		"fallback": "uix-sharp:property-investment",
	});
}

export default Component;
