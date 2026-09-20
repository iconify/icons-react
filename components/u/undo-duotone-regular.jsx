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
		"content": `<style>.l18s5p3nb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19 13v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lnv5wg3xc {
  d: path("M19 13v5");
}

.mvxy-gbbs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m2 10 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r8sldsvbw {
  d: path("M5 13a7 7 0 0 1 14 0");
}

.rg0uhlb5x {
  d: path("m2 10 3 3 3 -3");
}

.srsp9bb6c {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 13a7 7 0 0 1 14 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="srsp9bb6c"/><path class="l18s5p3nb"/><path class="mvxy-gbbs"/><path class="r8sldsvbw"/><path class="lnv5wg3xc"/><path class="rg0uhlb5x"/></g>`,
		"fallback": "iconmind:undo-duotone-regular",
	});
}

export default Component;
