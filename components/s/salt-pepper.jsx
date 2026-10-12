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
		"content": `<style>.cvw-6lmqu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.9 12.75h.01m2.69 0h.01");
}

.ew_4hibuv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 21.25V12a3.5 3.5 0 0 1 7 0v9.25Z");
}

.n0a8omxqi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.25 21.25V10a3.5 3.5 0 0 1 7 0v11.25Z");
}

.wl1ltbces {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.75 10.75h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ew_4hibuv"/><path class="cvw-6lmqu"/><path class="n0a8omxqi"/><path class="wl1ltbces"/></g>`,
		"fallback": "iconoven:salt-pepper",
	});
}

export default Component;
