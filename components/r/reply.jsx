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

.pqns4qbqd {
  d: path("m9.5 6l-5 5l5 5");
}

.q1_kx380q {
  d: path("M4.5 11H14a5.5 5.5 0 0 1 5.5 5.5V19");
}
</style><g class="hntgybcog"><path class="q1_kx380q"/><path class="pqns4qbqd"/></g>`,
		"fallback": "uix:reply",
	});
}

export default Component;
