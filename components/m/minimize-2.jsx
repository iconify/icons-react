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

.n-qwyf2op {
  d: path("M13.5 7.5v3h3M7 17l3.5-3.5m-3 0h3v3");
}

.qdaalqbjy {
  d: path("M9.625 3.5h4.75A6.125 6.125 0 0 1 20.5 9.625v4.75a6.125 6.125 0 0 1-6.125 6.125h-4.75A6.125 6.125 0 0 1 3.5 14.375v-4.75A6.125 6.125 0 0 1 9.625 3.5M17 7l-3.5 3.5");
}
</style><g class="hntgybcog"><path class="qdaalqbjy"/><path class="n-qwyf2op"/></g>`,
		"fallback": "uix:minimize-2",
	});
}

export default Component;
