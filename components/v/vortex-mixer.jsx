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

.n_309sbqs {
  d: path("M6.5 15.5h11a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3a3 3 0 0 1 3-3");
}

.pz6-j35rt {
  d: path("M10 2.5v11a2 2 0 0 0 4 0v-11M6.5 6q-1.5 3 0 6m11-6q1.5 3 0 6");
}
</style><g class="hntgybcog"><path class="n_309sbqs"/><path class="pz6-j35rt"/></g>`,
		"fallback": "uix:vortex-mixer",
	});
}

export default Component;
