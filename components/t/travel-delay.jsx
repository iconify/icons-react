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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n9dwyn7yy {
  d: path("M9.5 2.5c.75 0 1 .5 1 1.5v3.5l5.75 3.5v1.5l-5.75-1.75V14l2 1.25v1.25l-3-.75l-3 .75v-1.25l2-1.25v-3.25L2.75 12.5V11L8.5 7.5V4c0-1 .25-1.5 1-1.5M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="n9dwyn7yy"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:travel-delay",
	});
}

export default Component;
