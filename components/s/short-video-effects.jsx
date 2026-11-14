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
		"content": `<style>.es5bkdcpt {
  d: path("m9 13l.4.3a1.5 1.5 0 0 1 0 2.4L9 16a1.25 1.25 0 0 1-2-1v-1a1.25 1.25 0 0 1 2-1m9.25-11q0 3.5 3.5 3.5q-3.5 0-3.5 3.5q0-3.5-3.5-3.5q3.5 0 3.5-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oe2qs-blb {
  d: path("M7.375 7.5h2.75a4.375 4.375 0 0 1 4.375 4.375v5.25a4.375 4.375 0 0 1-4.375 4.375h-2.75A4.375 4.375 0 0 1 3 17.125v-5.25A4.375 4.375 0 0 1 7.375 7.5");
}
</style><g class="hntgybcog"><path class="oe2qs-blb"/><path class="es5bkdcpt"/></g>`,
		"fallback": "uix:short-video-effects",
	});
}

export default Component;
