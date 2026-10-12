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
		"content": `<style>.ekxin2b8i {
  width: 6.5px;
  height: 6.5px;
  x: 14.75px;
  y: 14.75px;
  rx: 1.5px;
}

.erfhgqbsg {
  d: path("M18 14.75V17M12 6h3.5A2.5 2.5 0 0 1 18 8.5v3m-2.25-2L18 11.75l2.25-2.25M12 18H8.5A2.5 2.5 0 0 1 6 15.5v-3m-2.25 2L6 12.25l2.25 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jdagscxop {
  d: path("M6 2.75V5");
}

.yrxf8qb1k {
  width: 6.5px;
  height: 6.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="yrxf8qb1k"/><path class="jdagscxop"/><rect class="ekxin2b8i"/><path class="erfhgqbsg"/></g>`,
		"fallback": "iconoven:supply-chain",
	});
}

export default Component;
