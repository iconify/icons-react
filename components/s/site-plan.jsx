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
		"content": `<style>.yh9pdkbkm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5V3h3.5m11 0H21v3.5M6.5 21H3v-3.5M10 3h4m7 7v3.6M13.2 21H10m-7-7v-4m10.2 5.5H6.5v-9h7V10h3v1.6m-1 5.9l2.5-3.25l2.5 3.25M16 21.75V19l4 2.75V19");
}
</style><path class="yh9pdkbkm"/>`,
		"fallback": "uix-sharp:site-plan",
	});
}

export default Component;
