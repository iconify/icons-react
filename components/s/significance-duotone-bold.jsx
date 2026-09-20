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
		"content": `<style>.d4y-4fbjb {
  fill: currentColor;
  d: path("M5 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ehef6tbzw {
  d: path("M10 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.jg5k_rbda {
  d: path("M16 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.mf-afdped {
  d: path("M15 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.o2uaggb1q {
  d: path("M5 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ujw6lacqu {
  fill: currentColor;
  d: path("M16 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.utlpmrn-a {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 10h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x50q_4bdr {
  d: path("M3 10h18");
}

.zamec3bwb {
  fill: currentColor;
  d: path("M15 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zid7cdc0n {
  fill: currentColor;
  d: path("M10 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="d4y-4fbjb"/><path class="zid7cdc0n"/><path class="zamec3bwb"/><path class="ujw6lacqu"/><path class="utlpmrn-a"/><path class="x50q_4bdr"/><path class="o2uaggb1q"/><path class="ehef6tbzw"/><path class="mf-afdped"/><path class="jg5k_rbda"/></g>`,
		"fallback": "iconmind:significance-duotone-bold",
	});
}

export default Component;
