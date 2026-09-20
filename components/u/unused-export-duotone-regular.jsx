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
		"content": `<style>.dd2oi04rr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dx4yo_bup {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 9h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.en0j5saud {
  d: path("M3 14h12");
}

.j835zw5-z {
  d: path("M3 9h18");
}

.k2pv4cqnd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 14h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kh1n04ogj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m7 16.5 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.nk7549ffs {
  d: path("m7 16.5 5 -5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.s1ajs51ib {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 4h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="s1ajs51ib"/><path class="dx4yo_bup"/><path class="k2pv4cqnd"/><path class="dd2oi04rr"/><path class="kh1n04ogj"/><path class="mg7aqnbsf"/><path class="j835zw5-z"/><path class="en0j5saud"/><path class="rkhcgsbdl"/><path class="nk7549ffs"/></g>`,
		"fallback": "iconmind:unused-export-duotone-regular",
	});
}

export default Component;
