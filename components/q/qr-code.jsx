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
		"content": `<style>.kvdves38h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 3.5h2.5A1.75 1.75 0 0 1 9.5 5.25v2.5A1.75 1.75 0 0 1 7.75 9.5h-2.5A1.75 1.75 0 0 1 3.5 7.75v-2.5A1.75 1.75 0 0 1 5.25 3.5m11 0h2.5a1.75 1.75 0 0 1 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-2.5a1.75 1.75 0 0 1 1.75-1.75m-11 11h2.5a1.75 1.75 0 0 1 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-2.5a1.75 1.75 0 0 1 1.75-1.75m1.25-8h.01m10.99 0h.01M6.5 17.5h.01m7.99-3V17m3 .5h3m-6 3h3m3-6h.01");
}
</style><path class="kvdves38h"/>`,
		"fallback": "uix:qr-code",
	});
}

export default Component;
