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
		"content": `<style>.asjt_p6in {
  d: path("M10.5 15a1.5 1.5 0 0 1 3 0");
}

.c26uqybpm {
  fill: currentColor;
  d: path("M9 15h6v3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.cf2pd_8sh {
  d: path("M9 15h6v3H9Z");
}

.d1zyr9bfc {
  d: path("M12 4v4");
}

.d8r3zz4mr {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j534ltbcb {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.m1mjigbsi {
  d: path("M4 8h16");
}
</style><g class="hntgybcog"><path class="d8r3zz4mr"/><path class="c26uqybpm"/><path class="j534ltbcb"/><path class="m1mjigbsi"/><path class="d1zyr9bfc"/><path class="cf2pd_8sh"/><path class="asjt_p6in"/></g>`,
		"fallback": "iconmind:order-packed-duotone-thin",
	});
}

export default Component;
