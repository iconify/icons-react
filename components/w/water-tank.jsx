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
		"content": `<style>.b2g11-mpz {
  d: path("M4.5 4.5a7.5 2 0 1 0 15 0a7.5 2 0 1 0-15 0Z");
}

.gevrtubnm {
  d: path("M4.5 4.5v7a7.5 2 0 0 0 15 0v-7m-13 8.75L5 21.5m12.5-8.25L19 21.5m-16.5 0h19m-15.75-4h12.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b2g11-mpz"/><path class="gevrtubnm"/></g>`,
		"fallback": "uix-sharp:water-tank",
	});
}

export default Component;
