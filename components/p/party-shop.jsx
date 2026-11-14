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

.ixubl3s9r {
  d: path("M3 7.75a4.25 5.25 0 1 0 8.5 0a4.25 5.25 0 1 0-8.5 0");
}

.p3llsccbq {
  d: path("M7.25 13q-1.25 3 .5 5.5t.5 3m6.5-8.5h5a1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-5A1.75 1.75 0 0 1 13 19.75v-5A1.75 1.75 0 0 1 14.75 13m2.5 0v8.5m0-8.5C15.5 9.5 13.5 11.5 15 13m2.25 0C19 9.5 21 11.5 19.5 13");
}
</style><g class="hntgybcog"><path class="ixubl3s9r"/><path class="p3llsccbq"/></g>`,
		"fallback": "uix:party-shop",
	});
}

export default Component;
