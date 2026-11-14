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
		"content": `<style>.fe4nbr6bg {
  d: path("M11.4 21.5H4.5v-19h15v9.6M8 7h3m2.5 0H16m-8 3.5h3m2.5 0H16M8 14h3");
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
</style><g class="ulnmmdpxh"><path class="fe4nbr6bg"/><path class="x_c2yubrz"/></g>`,
		"fallback": "uix-sharp:proof-of-income",
	});
}

export default Component;
