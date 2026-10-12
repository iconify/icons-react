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

.megl4yadw {
  d: path("M6 5.75h4.5v12.5H6Z");
}

.sxk1_ghxx {
  d: path("M13.5 8h2.25a1.5 1.5 0 0 1 1.5 1.5v7.25a1.5 1.5 0 0 0 3 0V7.5L18 5.25");
}

.tt57y9bgq {
  width: 4.5px;
  height: 3px;
  x: 6px;
  y: 15.25px;
  rx: 0.5px;
}

.x9jt35lvb {
  width: 10.5px;
  height: 18.5px;
  x: 3px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="x9jt35lvb"/><path class="megl4yadw"/><rect class="tt57y9bgq"/><path class="sxk1_ghxx"/></g>`,
		"fallback": "iconoven:low-fuel-light",
	});
}

export default Component;
