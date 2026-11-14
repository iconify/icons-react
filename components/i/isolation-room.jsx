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

.n8jx9db8t {
  d: path("M2.5 21v-9c0-5.5 4.25-9 9.5-9s9.5 3.5 9.5 9v9m-15-9.5v8");
}

.o8mpbu0bd {
  d: path("M6.5 15.5H16c.85 0 1.5.65 1.5 1.5v2.5m-8.75-6.75h1.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75h-1.5A.75.75 0 0 1 8 13.5a.75.75 0 0 1 .75-.75M2.5 21h19");
}
</style><g class="hntgybcog"><path class="n8jx9db8t"/><path class="o8mpbu0bd"/></g>`,
		"fallback": "uix:isolation-room",
	});
}

export default Component;
