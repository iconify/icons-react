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
		"content": `<style>.ef-jgqbdk {
  d: path("M4 3v18h10V3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k4p4tzbhq {
  d: path("M17 13v6h5v-6Z");
}

.kvmhsdkct {
  d: path("M18 13v-3c0 -1.5 1 -2.5 2 -2.5s1.5 1 1.5 2.5");
}
</style><g class="hntgybcog"><path class="ef-jgqbdk"/><path class="k4p4tzbhq"/><path class="kvmhsdkct"/></g>`,
		"fallback": "iconmind:unlock-door-outline-thin",
	});
}

export default Component;
