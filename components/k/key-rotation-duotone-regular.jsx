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
		"content": `<style>.d8z1r1beo {
  d: path("M15 5h3a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.m2xst7buy {
  d: path("m13 10.5 2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p8m79mb4i {
  d: path("m11 12.5 4 -4");
}

.qup_krbff {
  fill: currentColor;
  d: path("M7.5 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u2z_81bft {
  d: path("M7.5 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.wzx0dxb2r {
  d: path("m12 2 3 3 -3 3");
}

.yrm0q7bju {
  fill: currentColor;
  d: path("M15 5h3a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yrm0q7bju"/><path class="qup_krbff"/><path class="d8z1r1beo"/><path class="wzx0dxb2r"/><path class="u2z_81bft"/><path class="p8m79mb4i"/><path class="m2xst7buy"/></g>`,
		"fallback": "iconmind:key-rotation-duotone-regular",
	});
}

export default Component;
