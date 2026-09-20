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
		"content": `<style>.bpyxkfv4l {
  d: path("M17 14.5h2.5");
}

.d_xtg74gy {
  d: path("M15 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iu_19hbrz {
  d: path("M17 12v4.5");
}

.kr5if0b2e {
  fill: currentColor;
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ppbx_abyw {
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.pr270rb6e {
  fill: currentColor;
  d: path("M15 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.v-u0ijc7h {
  d: path("M3 21a6 6 0 0 1 12 0");
}
</style><g class="hntgybcog"><path class="kr5if0b2e"/><path class="pr270rb6e"/><path class="ppbx_abyw"/><path class="v-u0ijc7h"/><path class="d_xtg74gy"/><path class="iu_19hbrz"/><path class="bpyxkfv4l"/></g>`,
		"fallback": "iconmind:user-key-duotone-thin",
	});
}

export default Component;
