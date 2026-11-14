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

.phnhavb1h {
  d: path("M4 19.75v-8A1.75 1.75 0 0 1 5.75 10h2A1.75 1.75 0 0 0 9.5 8.25v-4a1.75 1.75 0 0 1 1.75-1.75h7A1.75 1.75 0 0 1 20 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 19.75M13 6.5v6m3.5-6v6");
}

.wyi2sgbkk {
  d: path("M13 21.5V17h3.5v4.5");
}
</style><g class="hntgybcog"><path class="phnhavb1h"/><path class="wyi2sgbkk"/></g>`,
		"fallback": "uix:pin-office",
	});
}

export default Component;
