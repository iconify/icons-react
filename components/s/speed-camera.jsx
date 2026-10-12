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
		"content": `<style>.d_lskeb7h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 13.25v8m-3 0h6M20.25 5.5l1-1m0 5h.01m-1.01 4l1 1");
}

.v48ooab1j {
  width: 3.25px;
  height: 5px;
  x: 15.25px;
  y: 7px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.v6wx0-brw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 9.5h.01");
}

.vn-q0zzmw {
  width: 12.5px;
  height: 7.5px;
  x: 2.75px;
  y: 5.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="vn-q0zzmw"/><rect class="v48ooab1j"/><path class="v6wx0-brw"/><path class="d_lskeb7h"/></g>`,
		"fallback": "iconoven:speed-camera",
	});
}

export default Component;
