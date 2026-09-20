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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.ojw5_mmlr {
  d: path("M12.5 6 15 8.5");
}

.t5v_djbzx {
  fill: currentColor;
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u8mhf344d {
  d: path("M12.5 6v6");
}

.v4hdeje_n {
  d: path("M8.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.xpzpcfrzo {
  fill: currentColor;
  d: path("M8.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yomctlb4k {
  d: path("M7 17v4l4 -4");
}
</style><g class="hntgybcog"><path class="t5v_djbzx"/><path class="xpzpcfrzo"/><path class="jq9hovbrs"/><path class="yomctlb4k"/><path class="v4hdeje_n"/><path class="u8mhf344d"/><path class="ojw5_mmlr"/></g>`,
		"fallback": "iconmind:music-generate-duotone-thin",
	});
}

export default Component;
