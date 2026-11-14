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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l9hk17fuu {
  d: path("M5.25 3.5H17.5a2.75 4.5 0 0 1 0 9H5.25m5.75-9v9m3-9v9m1 6.25h6.5m-3-3l3 3l-3 3");
}

.nbcbywb5x {
  d: path("M2.5 8A2.75 4.5 0 1 0 8 8a2.75 4.5 0 1 0-5.5 0");
}
</style><g class="hntgybcog"><path class="nbcbywb5x"/><path class="l9hk17fuu"/></g>`,
		"fallback": "uix:newspaper-delivery",
	});
}

export default Component;
