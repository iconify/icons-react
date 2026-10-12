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
		"content": `<style>.ilbcbvd5i {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 11.75V9a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v2.75ZM11.5 8V4.75H14m4.25 10.75h2.5m0-2.25v4.5");
}

.lxerl0wdp {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 15.5h.01m3.49 0h.01m3.49 0h.01");
}

.tgu5blb_q {
  width: 15px;
  height: 7.5px;
  x: 3.25px;
  y: 11.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3.75px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="tgu5blb_q"/><path class="ilbcbvd5i"/><path class="lxerl0wdp"/></g>`,
		"fallback": "iconoven:submarine",
	});
}

export default Component;
