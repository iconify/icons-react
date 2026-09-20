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
		"content": `<style>.f69zonn4h {
  d: path("M4 17a4 4 0 0 1 8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k_k2t6-nh {
  fill: currentColor;
  d: path("M5 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mkq7zj4dm {
  fill: currentColor;
  d: path("m13 18 5 -5 2 2 -5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.q8-0ejn0y {
  d: path("M5 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.v74zc_fve {
  d: path("m13 18 5 -5 2 2 -5 5Z");
}
</style><g class="hntgybcog"><path class="k_k2t6-nh"/><path class="mkq7zj4dm"/><path class="q8-0ejn0y"/><path class="f69zonn4h"/><path class="v74zc_fve"/></g>`,
		"fallback": "iconmind:profile-edit-duotone-thin",
	});
}

export default Component;
