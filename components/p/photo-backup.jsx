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
		"content": `<style>.bc75bcbgc {
  d: path("m6 10.5l3-3l3 3m0 0v8M9.5 16l2.5 2.5l2.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yphwozw7a {
  d: path("M8.625 2.5h6.75A2.625 2.625 0 0 1 18 5.125v2.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 6 7.875v-2.75A2.625 2.625 0 0 1 8.625 2.5M3.5 13.5V20A1.5 1.5 0 0 0 5 21.5h14a1.5 1.5 0 0 0 1.5-1.5v-6.5");
}
</style><g class="hntgybcog"><path class="yphwozw7a"/><path class="bc75bcbgc"/></g>`,
		"fallback": "uix:photo-backup",
	});
}

export default Component;
