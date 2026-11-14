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
		"content": `<style>.acdd3y9wk {
  d: path("M2.5 10c0-1.25 1-1.75 2.5-1.5c6 1 11 .5 16-2c-1.5 4-8 6-16 6c-1.5 0-2.5-1-2.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pcnjqx5do {
  d: path("M5.5 12.5q.75 4.5 4.5 6c-.5-2-.25-4.5.5-6.25");
}
</style><g class="hntgybcog"><path class="acdd3y9wk"/><path class="pcnjqx5do"/></g>`,
		"fallback": "uix:surfboard-fin",
	});
}

export default Component;
