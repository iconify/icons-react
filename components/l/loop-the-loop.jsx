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

.xbk7t3bpn {
  d: path("M18.25 15.25L21 18l-2.75 2.75");
}

.z5op5zbns {
  d: path("M3 18c7 0 14-4 14-9.5a5 5 0 0 0-10 0C7 14 14 18 21 18");
}
</style><g class="ulnmmdpxh"><path class="z5op5zbns"/><path class="xbk7t3bpn"/></g>`,
		"fallback": "uix-sharp:loop-the-loop",
	});
}

export default Component;
