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
		"content": `<style>.d_7om_d_v {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5.5 9h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.edjg_qbgi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13.5 15h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fsi7fbbnr {
  d: path("M13.5 15h5");
}

.g9_eu8bfj {
  d: path("M5.5 9h5");
}

.gg9qhlhxo {
  d: path("M8 4v16");
}

.gof-i4beu {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mujv0vbff {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pa1ot6bmg {
  d: path("M16 4v16");
}
</style><g class="nrj6p8qat"><path class="mujv0vbff"/><path class="gof-i4beu"/><path class="d_7om_d_v"/><path class="edjg_qbgi"/><path class="gg9qhlhxo"/><path class="pa1ot6bmg"/><path class="g9_eu8bfj"/><path class="fsi7fbbnr"/></g>`,
		"fallback": "iconmind:parameters-duotone-regular",
	});
}

export default Component;
