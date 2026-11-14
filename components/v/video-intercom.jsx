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
		"content": `<style>.b6j39t42f {
  d: path("M2.5 21.5v-18H8v18m6.5-18h3A3.5 3.5 0 0 1 21 7v9.5a3.5 3.5 0 0 1-3.5 3.5h-3a3.5 3.5 0 0 1-3.5-3.5V7a3.5 3.5 0 0 1 3.5-3.5");
}

.ety4mphwl {
  d: path("M15.5 6.5h1a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 16.5 11h-1a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 15.5 6.5m-1.25 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b6j39t42f"/><path class="ety4mphwl"/></g>`,
		"fallback": "uix:video-intercom",
	});
}

export default Component;
