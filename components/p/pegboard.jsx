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
		"content": `<style>.cnb8nkbmv {
  width: 3.5px;
  height: 6.25px;
  x: 10.25px;
  y: 5.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.25px;
}

.dt3j7ib_c {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.s29oujzhd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12v6.25");
}

.x3_hipb7b {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 6.5h.01M6.5 12h.01m-.01 5.5h.01m10.99-11h.01M17.5 12h.01m-.01 5.5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="dt3j7ib_c"/><path class="x3_hipb7b"/><rect class="cnb8nkbmv"/><path class="s29oujzhd"/></g>`,
		"fallback": "iconoven:pegboard",
	});
}

export default Component;
