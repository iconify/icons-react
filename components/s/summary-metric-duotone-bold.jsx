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
		"content": `<style>.bt9fpobhk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 14h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fkv80ihsm {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 11h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hb0ojub4g {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 8h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ikiprn9sq {
  d: path("M9 14h6");
}

.jiw8u-asa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.pt-3kkb2k {
  d: path("M9 11h6");
}

.qr1iqpomq {
  d: path("M9 8h6");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="dh-nlhghu"/><path class="jiw8u-asa"/><path class="hb0ojub4g"/><path class="fkv80ihsm"/><path class="bt9fpobhk"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="qr1iqpomq"/><path class="pt-3kkb2k"/><path class="ikiprn9sq"/></g>`,
		"fallback": "iconmind:summary-metric-duotone-bold",
	});
}

export default Component;
