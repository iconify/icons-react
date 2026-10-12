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
		"content": `<style>.cvmntqb7l {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9.25h5.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m-1 3h7.5");
}

.g-5u-ac8w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.25 10h.01m-.01 4.25h.01");
}

.hruw0ckxt {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 18.25v2.5m11.5-2.5v2.5");
}

.jdsurobmy {
  width: 18.5px;
  height: 12px;
  x: 2.75px;
  y: 6.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="jdsurobmy"/><path class="cvmntqb7l"/><path class="g-5u-ac8w"/><path class="hruw0ckxt"/></g>`,
		"fallback": "iconoven:toaster-oven",
	});
}

export default Component;
