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

.ji_03gfga {
  d: path("M14.5 11.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.ppbx_abyw {
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.rhae1hbkk {
  d: path("m19.5 13.5 2 2");
}

.v-u0ijc7h {
  d: path("M3 21a6 6 0 0 1 12 0");
}
</style><g class="hntgybcog"><path class="ppbx_abyw"/><path class="v-u0ijc7h"/><path class="ji_03gfga"/><path class="rhae1hbkk"/></g>`,
		"fallback": "iconmind:user-search-outline-thin",
	});
}

export default Component;
