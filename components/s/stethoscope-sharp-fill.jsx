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
		"content": `<style>.fpt9-jbvr {
  d: path("M8 15C2.9955 15 1.7856 8.2335 2.0294 4.623L2.139 3L6.117 3M8 15C13.0045 15 14.2144 8.2335 13.9706 4.623L13.861 3L9.883 3M20 12L20 15C20 18.3137 17.3137 21 14 21C10.6863 21 8 18.3137 8 15");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wk6aolb1y {
  fill: currentColor;
  d: path("M23 10C23 11.6569 21.6569 13 20 13C18.3431 13 17 11.6569 17 10C17 8.3431 18.3431 7 20 7C21.6569 7 23 8.3431 23 10Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="wk6aolb1y"/><path class="fpt9-jbvr"/></g>`,
		"fallback": "keyline-icons:stethoscope-sharp-fill",
	});
}

export default Component;
