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
		"content": `<style>.a7nqwsbyk {
  d: path("M7 10h2a3.5 3.5 0 0 1 3.5 3.5v2A3.5 3.5 0 0 1 9 19H7a3.5 3.5 0 0 1-3.5-3.5v-2A3.5 3.5 0 0 1 7 10m1-5a9.5 9.5 0 0 1 9.5 9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vei8xtc9f {
  d: path("m14.75 11.75l2.75 2.75l2.75-2.75");
}
</style><g class="hntgybcog"><path class="a7nqwsbyk"/><path class="vei8xtc9f"/></g>`,
		"fallback": "uix:rotate-90-cw",
	});
}

export default Component;
