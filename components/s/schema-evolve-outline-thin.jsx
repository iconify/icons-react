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

.jy3t2qbob {
  d: path("M3 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.p8a31xr4o {
  d: path("M16 12h6");
}

.rcu4irbnl {
  d: path("M19 9v6");
}

.slgjv5l0u {
  d: path("M3 13h10");
}

.zyggqel0w {
  d: path("M3 8h10");
}
</style><g class="hntgybcog"><path class="jy3t2qbob"/><path class="zyggqel0w"/><path class="slgjv5l0u"/><path class="rcu4irbnl"/><path class="p8a31xr4o"/></g>`,
		"fallback": "iconmind:schema-evolve-outline-thin",
	});
}

export default Component;
