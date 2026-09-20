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
		"content": `<style>.fe670vbuv {
  d: path("m12 8 8 8H4Z");
}

.fmlaifbpn {
  d: path("M12 16v4");
}

.l5q9_cc7w {
  d: path("M2 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t630gdbxd {
  d: path("M7 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zw_n0_vwa {
  d: path("m12 3 7 7H5Z");
}
</style><g class="nrj6p8qat"><path class="zw_n0_vwa"/><path class="fe670vbuv"/><path class="fmlaifbpn"/><path class="l5q9_cc7w"/><path class="t630gdbxd"/></g>`,
		"fallback": "iconmind:nature-walk-outline-regular",
	});
}

export default Component;
