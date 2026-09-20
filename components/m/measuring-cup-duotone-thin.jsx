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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nreph_b_j {
  d: path("M17 9a3 3 0 0 1 0 6");
}

.qtbq5abnn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 6v13h12V6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.stjf13gff {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 15h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u-cg_ib1f {
  d: path("M5 6v13h12V6");
}

.xksi644vv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 11h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zatfoh9gu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 9a3 3 0 0 1 0 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zuuhu6bzg {
  d: path("M6 15h6");
}
</style><g class="hntgybcog"><path class="qtbq5abnn"/><path class="xksi644vv"/><path class="stjf13gff"/><path class="zatfoh9gu"/><path class="u-cg_ib1f"/><path class="dwqtbeylw"/><path class="zuuhu6bzg"/><path class="nreph_b_j"/></g>`,
		"fallback": "iconmind:measuring-cup-duotone-thin",
	});
}

export default Component;
