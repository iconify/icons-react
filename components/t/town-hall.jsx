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
		"content": `<style>.lrrrpdima {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5za3 3 0 0 1 3 3v3a3 3 0 0 1-3 3a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3m0 9v9.75m-4 0h4.2M7 7h6m1.25 9.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M13 21.75c0-1.5 1.25-2.5 3-2.5s3 1 3 2.5m-.25-7.799a1.5 1.5 0 1 1 .237 2.709M20 18.5c1 .25 1.75 1.25 1.75 3");
}
</style><path class="lrrrpdima"/>`,
		"fallback": "uix:town-hall",
	});
}

export default Component;
