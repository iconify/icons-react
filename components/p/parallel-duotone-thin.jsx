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
		"content": `<style>.amid48b6f {
  d: path("m8 12 4 4h9");
}

.boqmo37co {
  d: path("M3 12h5l4 -4h9");
}

.e2lswlyjr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12h5l4 -4h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ty7e9cb8v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m8 12 4 4h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="e2lswlyjr"/><path class="ty7e9cb8v"/><path class="boqmo37co"/><path class="amid48b6f"/></g>`,
		"fallback": "iconmind:parallel-duotone-thin",
	});
}

export default Component;
