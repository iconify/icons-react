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
		"content": `<style>.c3b3cobio {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 15h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dwqtbeylw {
  d: path("M6 11h6");
}

.ltmskg1nl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 11h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nreph_b_j {
  d: path("M17 9a3 3 0 0 1 0 6");
}

.ozfpplbsk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 9a3 3 0 0 1 0 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u-cg_ib1f {
  d: path("M5 6v13h12V6");
}

.wqiv7exrb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 6v13h12V6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zuuhu6bzg {
  d: path("M6 15h6");
}
</style><g class="s0phu2bbs"><path class="wqiv7exrb"/><path class="ltmskg1nl"/><path class="c3b3cobio"/><path class="ozfpplbsk"/><path class="u-cg_ib1f"/><path class="dwqtbeylw"/><path class="zuuhu6bzg"/><path class="nreph_b_j"/></g>`,
		"fallback": "iconmind:measuring-cup-duotone-bold",
	});
}

export default Component;
