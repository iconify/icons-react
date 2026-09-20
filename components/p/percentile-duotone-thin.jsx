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
		"content": `<style>.batj7bb2k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 11v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c7dgfu7wx {
  d: path("M2 4h20");
}

.e-0451fwt {
  d: path("M20 16v4");
}

.f1psbbcsw {
  d: path("M4 15v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kdl_ri28b {
  d: path("M8 11v9");
}

.ljo-5rbrq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 4h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lkivjibuo {
  d: path("M12 13v7");
}

.nzvp0dheg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 13v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qcf-nj9zp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 16v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sb4nxhxer {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 7v13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xqimmi-kt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 15v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yzvng5w1c {
  d: path("M16 7v13");
}
</style><g class="hntgybcog"><path class="xqimmi-kt"/><path class="batj7bb2k"/><path class="nzvp0dheg"/><path class="sb4nxhxer"/><path class="qcf-nj9zp"/><path class="ljo-5rbrq"/><path class="f1psbbcsw"/><path class="kdl_ri28b"/><path class="lkivjibuo"/><path class="yzvng5w1c"/><path class="e-0451fwt"/><path class="c7dgfu7wx"/></g>`,
		"fallback": "iconmind:percentile-duotone-thin",
	});
}

export default Component;
