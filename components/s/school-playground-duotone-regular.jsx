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
		"content": `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.ed-cudrmv {
  d: path("M20 6v14");
}

.eljxzwbgp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 15h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gzw9grb_d {
  d: path("M15 6v9");
}

.hqs3z7wnn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 6h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hxpdvgpky {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 6v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i7797vbcv {
  d: path("M9 6v9");
}

.k4qo1xe9v {
  d: path("M4 6h16");
}

.knhft4qdm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 6v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rjl8fe1sw {
  d: path("M4 6v14");
}

.wgtcdk8rf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M20 6v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zitd6_pbm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 6v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="hqs3z7wnn"/><path class="knhft4qdm"/><path class="wgtcdk8rf"/><path class="hxpdvgpky"/><path class="zitd6_pbm"/><path class="eljxzwbgp"/><path class="k4qo1xe9v"/><path class="rjl8fe1sw"/><path class="ed-cudrmv"/><path class="i7797vbcv"/><path class="gzw9grb_d"/><path class="c4khiwgvb"/></g>`,
		"fallback": "iconmind:school-playground-duotone-regular",
	});
}

export default Component;
