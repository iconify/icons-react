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

.kr5if0b2e {
  fill: currentColor;
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mmnpqegwb {
  fill: currentColor;
  d: path("M14 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.my0fs8b6j {
  d: path("m19 17 3 3");
}

.n8wwq96fg {
  d: path("M14 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.ppbx_abyw {
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.tvr_k_bbt {
  d: path("M4 19a5 5 0 0 1 10 0");
}
</style><g class="hntgybcog"><path class="kr5if0b2e"/><path class="mmnpqegwb"/><path class="ppbx_abyw"/><path class="tvr_k_bbt"/><path class="n8wwq96fg"/><path class="my0fs8b6j"/></g>`,
		"fallback": "iconmind:session-duotone-thin",
	});
}

export default Component;
