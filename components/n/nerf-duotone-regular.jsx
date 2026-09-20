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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dktry7bqc {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gn_p0sb7q {
  d: path("m3 20 5 -5");
}

.ma5hs_b2s {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 4 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.shqarv4xv {
  d: path("m3 4 5 5");
}

.w8mha9b3t {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 12h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xo4vbccun {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 20 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zy54a7bml {
  d: path("M17 12h4");
}
</style><g class="nrj6p8qat"><path class="dktry7bqc"/><path class="ma5hs_b2s"/><path class="xo4vbccun"/><path class="w8mha9b3t"/><path class="shqarv4xv"/><path class="gn_p0sb7q"/><path class="bo51iypxr"/><path class="zy54a7bml"/></g>`,
		"fallback": "iconmind:nerf-duotone-regular",
	});
}

export default Component;
