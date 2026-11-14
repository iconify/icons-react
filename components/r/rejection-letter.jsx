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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w15bunbwm {
  d: path("m3 6l8.75 6.5L20.5 6m-5 9.5l5 5m0-5l-5 5");
}

.ywpdmq4md {
  d: path("M13.6 17.5H2.5v-13H21v7.6");
}
</style><g class="ulnmmdpxh"><path class="ywpdmq4md"/><path class="w15bunbwm"/></g>`,
		"fallback": "uix-sharp:rejection-letter",
	});
}

export default Component;
