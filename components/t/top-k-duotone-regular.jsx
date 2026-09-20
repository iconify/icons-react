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
		"content": `<style>.av78w6b9i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 10h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.be306ynmy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cvmc0qb9s {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 21h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n-7t0yb1r {
  d: path("M3 13h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qc-1i0btz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 13h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r4xjkv11f {
  d: path("M3 10h15");
}

.tcotthakx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 17h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ukjt4fb6s {
  d: path("M3 17h12");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.yvi-t83_e {
  d: path("M3 21h9");
}
</style><g class="nrj6p8qat"><path class="be306ynmy"/><path class="av78w6b9i"/><path class="qc-1i0btz"/><path class="tcotthakx"/><path class="cvmc0qb9s"/><path class="xgrfb-bqu"/><path class="r4xjkv11f"/><path class="n-7t0yb1r"/><path class="ukjt4fb6s"/><path class="yvi-t83_e"/></g>`,
		"fallback": "iconmind:top-k-duotone-regular",
	});
}

export default Component;
