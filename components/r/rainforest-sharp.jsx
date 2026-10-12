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
		"content": `<style>.nrq2xk4ea {
  d: path("M7 17.25v4M13 15v6.25m5-4.5v4.5M4.75 2.75l-.75 2m5.5-2l-.75 2m11 .5l-.75 2");
}

.o4qt9fbtn {
  d: path("M17.5 10.29a3.25 3.25 0 1 1-2.57 4.28a4.5 4.5 0 0 0 2.57-4.28Z");
}

.pbch-3bfg {
  cx: 7px;
  cy: 13px;
  r: 4.25px;
}

.pzltszczf {
  d: path("M8.72 9.11a4.5 4.5 0 1 1 2.25 5.41a4.25 4.25 0 0 0-2.25-5.41Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pzltszczf"/><path class="o4qt9fbtn"/><circle class="pbch-3bfg"/><path class="nrq2xk4ea"/></g>`,
		"fallback": "iconoven:rainforest-sharp",
	});
}

export default Component;
