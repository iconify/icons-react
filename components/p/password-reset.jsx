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
		"content": `<style>.hqlfe-boa {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.5 4.75v3M16.76 13a5.5 5.5 0 1 1-9.52 0m-2.17.58L7.24 13l.58 2.17");
}

.j0z_6wcpo {
  width: 18.5px;
  height: 7px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.jp2jwumlg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 6.25h.01m3.49 0h.01m3.49 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="j0z_6wcpo"/><path class="jp2jwumlg"/><path class="hqlfe-boa"/></g>`,
		"fallback": "iconoven:password-reset",
	});
}

export default Component;
