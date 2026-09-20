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
		"content": `<style>.d543kjbcd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m11 5 -5 5h4l-5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gcyieeqbl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16.12 10.88a3 3 0 0 1 0 4.24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.izng5ebil {
  d: path("M18.24 8.76a6 6 0 0 1 0 8.5");
}

.kat3by1wu {
  d: path("M16.12 10.88a3 3 0 0 1 0 4.24");
}

.n-bthvmji {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18.24 8.76a6 6 0 0 1 0 8.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v_bqwbcfx {
  d: path("m11 5 -5 5h4l-5 5");
}
</style><g class="s0phu2bbs"><path class="d543kjbcd"/><path class="gcyieeqbl"/><path class="n-bthvmji"/><path class="v_bqwbcfx"/><path class="kat3by1wu"/><path class="izng5ebil"/></g>`,
		"fallback": "iconmind:sound-effect-duotone-bold",
	});
}

export default Component;
