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

.k9uo6ihdg {
  d: path("M6 11.25v3.5c0 3.6 2.7 6.5 6 6.5s6-2.9 6-6.5v-3.5m-12-6v-2.5m12 2.5v-2.5");
}

.lrv26qbrg {
  width: 3.5px;
  height: 6px;
  x: 4.25px;
  y: 5.25px;
  rx: 1px;
}

.rnp7s23sz {
  width: 3.5px;
  height: 6px;
  x: 16.25px;
  y: 5.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="lrv26qbrg"/><rect class="rnp7s23sz"/><path class="k9uo6ihdg"/></g>`,
		"fallback": "iconoven:patch-cable",
	});
}

export default Component;
