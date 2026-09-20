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
		"content": `<style>.enrpg0aoq {
  d: path("M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m0hvambgh {
  d: path("M16 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mxzk029nb {
  d: path("M12 10v4");
}

.n2wmvdxwf {
  fill: currentColor;
  d: path("M16 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pywr_yykw {
  d: path("m4 12 8 -8h8v8l-8 8Z");
}

.unu7n2b0o {
  fill: currentColor;
  d: path("m4 12 8 -8h8v8l-8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wfyw8dbnu {
  fill: currentColor;
  d: path("M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="unu7n2b0o"/><path class="n2wmvdxwf"/><path class="wfyw8dbnu"/><path class="pywr_yykw"/><path class="m0hvambgh"/><path class="enrpg0aoq"/><path class="mxzk029nb"/></g>`,
		"fallback": "iconmind:shipping-cost-duotone-thin",
	});
}

export default Component;
