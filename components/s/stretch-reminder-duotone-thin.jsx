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
		"content": `<style>.bbxz-u7vo {
  d: path("M16 6a6 6 0 0 1 0 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ngmxa3mzr {
  fill: currentColor;
  d: path("M4 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ph1z-dbce {
  d: path("M16 9a3 3 0 0 1 0 6");
}

.r_4k1sbsg {
  d: path("M7 13h6");
}

.rm1tb6aya {
  d: path("M4 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.z1h8pnb6e {
  d: path("M7 8v5l4 4v4");
}
</style><g class="hntgybcog"><path class="ngmxa3mzr"/><path class="rm1tb6aya"/><path class="z1h8pnb6e"/><path class="r_4k1sbsg"/><path class="ph1z-dbce"/><path class="bbxz-u7vo"/></g>`,
		"fallback": "iconmind:stretch-reminder-duotone-thin",
	});
}

export default Component;
