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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.jk9vx52lc {
  d: path("M2.5 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ziqek4iyl {
  d: path("M5 16v-6a3 3 0 0 1 3-3h7.5m0 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-.75 11a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="jk9vx52lc"/><path class="ziqek4iyl"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:route-history",
	});
}

export default Component;
