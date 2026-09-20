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
		"content": `<style>.fp0jerb6p {
  d: path("M10.5 6H13a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h2.5");
}

.ir69e_bvd {
  d: path("M11 8v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r8lmp2u_n {
  fill: currentColor;
  d: path("M10.5 6H13a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rx7vihb0q {
  d: path("M7 8v8");
}

.sv2pgmbzl {
  fill: currentColor;
  d: path("m19 10 3 -3v10l-3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tqfrzx00u {
  d: path("m19 10 3 -3v10l-3 -3Z");
}
</style><g class="nrj6p8qat"><path class="r8lmp2u_n"/><path class="sv2pgmbzl"/><path class="fp0jerb6p"/><path class="tqfrzx00u"/><path class="rx7vihb0q"/><path class="ir69e_bvd"/></g>`,
		"fallback": "iconmind:scene-detect-duotone-regular",
	});
}

export default Component;
