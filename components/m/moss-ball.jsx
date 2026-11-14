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

.q-rjoqbhi {
  d: path("M14.75 11.25a1.75 1.75 0 0 1 0-3.5m-5.5 9a1.75 1.75 0 0 1 0-3.5");
}

.t7t0gmboe {
  d: path("M20 12a3 3 0 0 1-1.5 4.75a3 3 0 0 1-4 2.75a3 3 0 0 1-5 0a3 3 0 0 1-4-2.75A3 3 0 0 1 4 12a3 3 0 0 1 1.5-4.75a3 3 0 0 1 4-2.75a3 3 0 0 1 5 0a3 3 0 0 1 4 2.75A3 3 0 0 1 20 12");
}
</style><g class="hntgybcog"><path class="t7t0gmboe"/><path class="q-rjoqbhi"/></g>`,
		"fallback": "uix:moss-ball",
	});
}

export default Component;
