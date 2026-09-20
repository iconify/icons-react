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
		"content": `<style>.dwqtbeylw {
  d: path("M6 11h6");
}

.nreph_b_j {
  d: path("M17 9a3 3 0 0 1 0 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u-cg_ib1f {
  d: path("M5 6v13h12V6");
}

.zuuhu6bzg {
  d: path("M6 15h6");
}
</style><g class="nrj6p8qat"><path class="u-cg_ib1f"/><path class="dwqtbeylw"/><path class="zuuhu6bzg"/><path class="nreph_b_j"/></g>`,
		"fallback": "iconmind:measuring-cup-outline-regular",
	});
}

export default Component;
