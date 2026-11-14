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
		"content": `<style>.ek2pqwf_t {
  d: path("M2.5 21C4 15.5 7 10.5 10 10.5c1.25 0 2 1.25 2.5 2.75m5 1c1.5 1.75 3 4.25 4 6.75m-19 0h19M17 2.25l3.75 1.5M19 3l-3.25 9");
}

.ey0_9nb7e {
  d: path("M13.25 11L18 12.75L16.75 16l-3.25 2l-1.5-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ek2pqwf_t"/><path class="ey0_9nb7e"/></g>`,
		"fallback": "uix-sharp:sand-quarry",
	});
}

export default Component;
