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
		"content": `<style>.f3ij1ab_k {
  d: path("M16 4h4v4Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ld7zhcybq {
  fill: currentColor;
  d: path("M4 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.o83gk4lgi {
  d: path("M3 20 19 4");
}

.rk1sdbxrm {
  fill: currentColor;
  d: path("M16 4h4v4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u_41jqbcx {
  d: path("M4 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="rk1sdbxrm"/><path class="ld7zhcybq"/><path class="o83gk4lgi"/><path class="f3ij1ab_k"/><path class="u_41jqbcx"/></g>`,
		"fallback": "iconmind:javelin-duotone-thin",
	});
}

export default Component;
