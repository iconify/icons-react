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
		"content": `<style>.d52t8wbsd {
  d: path("m12 4 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.gbe32p-qb {
  d: path("M3 15a9 3.5 0 1 0 18 0 9 3.5 0 1 0 -18 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d52t8wbsd"/><path class="gbe32p-qb"/></g>`,
		"fallback": "iconmind:puddle-outline-thin",
	});
}

export default Component;
