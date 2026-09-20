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
		"content": `<style>.m74qnacmh {
  d: path("M4 17a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 8a5.5 5.5 0 0 1 4.5 9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nxwi98bwu {
  d: path("m15 17.5 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.qt1fp7i7u {
  d: path("m9 17.5 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.s4gkh5bgf {
  fill: currentColor;
  d: path("m15 17.5 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u1teaqsro {
  fill: currentColor;
  d: path("M4 17a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 8a5.5 5.5 0 0 1 4.5 9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wb1hijb7c {
  d: path("M13.5 5a3.5 3.5 0 0 1 7 0");
}

.wln-4upsn {
  fill: currentColor;
  d: path("m9 17.5 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="u1teaqsro"/><path class="wln-4upsn"/><path class="s4gkh5bgf"/><path class="wb1hijb7c"/><path class="m74qnacmh"/><path class="qt1fp7i7u"/><path class="nxwi98bwu"/></g>`,
		"fallback": "iconmind:shower-duotone-regular",
	});
}

export default Component;
