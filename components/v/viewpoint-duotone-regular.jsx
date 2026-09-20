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
		"content": `<style>.acyg6nb1v {
  d: path("M10 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fsuht_b8c {
  fill: currentColor;
  d: path("M10 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.idhymedkk {
  d: path("m2 20 6 -6 3 3 5 -5 5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oze096but {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6.36 5.95a6 6 0 0 1 11.28 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oze4upblc {
  d: path("M6.36 5.95a6 6 0 0 1 11.28 0");
}

.re3il22dw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m2 20 6 -6 3 3 5 -5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="fsuht_b8c"/><path class="oze096but"/><path class="re3il22dw"/><path class="oze4upblc"/><path class="acyg6nb1v"/><path class="idhymedkk"/></g>`,
		"fallback": "iconmind:viewpoint-duotone-regular",
	});
}

export default Component;
