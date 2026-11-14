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
		"content": `<style>.od2v2ccvl {
  d: path("m6.5 14l5.5 2.5l5.5-2.5M12 16.5v5m-3-12C7.25 7.75 10.75 5.75 9 3m6 6.5c-1.75-1.75 1.75-3.75 0-6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w1-2xqbmm {
  d: path("m12 11.5l5.5 2.5v5L12 21.5L6.5 19v-5Z");
}
</style><g class="ulnmmdpxh"><path class="w1-2xqbmm"/><path class="od2v2ccvl"/></g>`,
		"fallback": "uix-sharp:smoke-simulation",
	});
}

export default Component;
