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
		"content": `<style>.f3klz9dak {
  cx: 12.25px;
  cy: 17.5px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iatyddcmd {
  cx: 5.75px;
  cy: 6.75px;
  r: 2.25px;
}

.l-a3p-biv {
  d: path("m16.75 3.75l-13 16.5");
}

.rctbt0bba {
  cx: 18.75px;
  cy: 17.5px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="iatyddcmd"/><circle class="f3klz9dak"/><circle class="rctbt0bba"/><path class="l-a3p-biv"/></g>`,
		"fallback": "iconoven:per-mille",
	});
}

export default Component;
