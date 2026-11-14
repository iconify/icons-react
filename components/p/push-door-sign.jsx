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

.jwaii3pfa {
  d: path("M11.25 2.5h8.5a1.75 1.75 0 0 1 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75h-8.5a1.75 1.75 0 0 1-1.75-1.75V4.25a1.75 1.75 0 0 1 1.75-1.75");
}

.t0bh40b3u {
  d: path("M14.25 6h2.5a1.75 1.75 0 0 1 1.75 1.75v8.5A1.75 1.75 0 0 1 16.75 18h-2.5a1.75 1.75 0 0 1-1.75-1.75v-8.5A1.75 1.75 0 0 1 14.25 6M2.5 12H7m-2-2l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="jwaii3pfa"/><path class="t0bh40b3u"/></g>`,
		"fallback": "uix:push-door-sign",
	});
}

export default Component;
