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
		"content": `<style>.amid48b6f {
  d: path("m8 12 4 4h9");
}

.boqmo37co {
  d: path("M3 12h5l4 -4h9");
}

.bqmtvvbnd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 12 4 4h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h1er6kbcg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12h5l4 -4h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="h1er6kbcg"/><path class="bqmtvvbnd"/><path class="boqmo37co"/><path class="amid48b6f"/></g>`,
		"fallback": "iconmind:parallel-duotone-regular",
	});
}

export default Component;
