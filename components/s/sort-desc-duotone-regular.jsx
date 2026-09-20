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
		"content": `<style>.hqs3z7wnn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 6h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k4qo1xe9v {
  d: path("M4 6h16");
}

.np0d7gb6n {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 18h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r5_3r9_hf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vybq366mg {
  d: path("M4 18h6");
}

.xlekzhbnl {
  d: path("M4 12h11");
}
</style><g class="nrj6p8qat"><path class="hqs3z7wnn"/><path class="r5_3r9_hf"/><path class="np0d7gb6n"/><path class="k4qo1xe9v"/><path class="xlekzhbnl"/><path class="vybq366mg"/></g>`,
		"fallback": "iconmind:sort-desc-duotone-regular",
	});
}

export default Component;
