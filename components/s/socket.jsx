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
		"content": `<style>.hu5_labti {
  width: 17.5px;
  height: 17.5px;
  x: 3.25px;
  y: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 4px;
}

.iz94wgblf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 12h.01m4.49 0h.01");
}

.nl0pxj_sf {
  cx: 12px;
  cy: 12px;
  r: 5.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="hu5_labti"/><circle class="nl0pxj_sf"/><path class="iz94wgblf"/></g>`,
		"fallback": "iconoven:socket",
	});
}

export default Component;
