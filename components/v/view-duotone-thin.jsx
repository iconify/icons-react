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

.k_2z93bzc {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.tcenmsthl {
  d: path("m3 12 6 -6h6l6 6");
}

.u8acqu0jc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 12 6 6h6l6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uls5d7bvt {
  d: path("m3 12 6 6h6l6 -6");
}

.yd2gt-b0a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 12 6 -6h6l6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="k_2z93bzc"/><path class="yd2gt-b0a"/><path class="u8acqu0jc"/><path class="tcenmsthl"/><path class="uls5d7bvt"/><path class="n3p0zmbop"/></g>`,
		"fallback": "iconmind:view-duotone-thin",
	});
}

export default Component;
