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
		"content": `<style>.hlqoyz1hh {
  d: path("M3 20a9 9 0 0 1 18 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.huxgkojtp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 20a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.igam7_b3d {
  d: path("M16 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.keqc2pbxm {
  d: path("M4 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ph-bhccoq {
  d: path("M10 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.r0fx73bms {
  fill: currentColor;
  d: path("M16 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rvz2lnbll {
  fill: currentColor;
  d: path("M4 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xbdnj9ayw {
  fill: currentColor;
  d: path("M10 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="rvz2lnbll"/><path class="xbdnj9ayw"/><path class="r0fx73bms"/><path class="huxgkojtp"/><path class="keqc2pbxm"/><path class="ph-bhccoq"/><path class="igam7_b3d"/><path class="hlqoyz1hh"/></g>`,
		"fallback": "iconmind:people-group-duotone-thin",
	});
}

export default Component;
