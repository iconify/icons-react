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

.r7jidh3bc {
  d: path("M6.75 7.5h5.5A1.75 1.75 0 0 1 14 9.25v5.5a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 5 14.75v-5.5A1.75 1.75 0 0 1 6.75 7.5M16.5 5v14M19 9h.01M19 12h.01m-.76 3.75h1.5");
}

.syxmxmb9c {
  d: path("M5.125 5h13.75A2.625 2.625 0 0 1 21.5 7.625v8.75A2.625 2.625 0 0 1 18.875 19H5.125A2.625 2.625 0 0 1 2.5 16.375v-8.75A2.625 2.625 0 0 1 5.125 5");
}
</style><g class="hntgybcog"><path class="syxmxmb9c"/><path class="r7jidh3bc"/></g>`,
		"fallback": "uix:kitchenette",
	});
}

export default Component;
