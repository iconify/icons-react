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
		"content": `<style>.qr8v9tbpk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 6.75c3.25-1 6.25-1 9.5 0v10c-3.25 1.75-6.25 1.75-9.5 0ZM9.5 10h5m-5 3.5h5M7.25 7.75L3 3.25m13.75 4.5L21 3.25M7.25 15.75l-4.25 5m13.75-5l4.25 5");
}
</style><path class="qr8v9tbpk"/>`,
		"fallback": "iconoven:surgical-face-mask",
	});
}

export default Component;
