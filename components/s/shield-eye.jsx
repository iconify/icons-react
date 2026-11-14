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

.hnvnn0bgl {
  d: path("m12 2.75l7.5 2.75v6c0 4.7-3.1 8-7.5 9.75c-4.4-1.75-7.5-5.05-7.5-9.75v-6Z");
}

.wdwazfbip {
  d: path("M7.5 11.5c1.1-1.9 2.7-3 4.5-3s3.4 1.1 4.5 3c-1.1 1.9-2.7 3-4.5 3s-3.4-1.1-4.5-3m4.5 0h.01");
}
</style><g class="hntgybcog"><path class="hnvnn0bgl"/><path class="wdwazfbip"/></g>`,
		"fallback": "uix:shield-eye",
	});
}

export default Component;
