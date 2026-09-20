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
		"content": `<style>.cj2au9bnv {
  d: path("M9.5 7h5v9L12 13.5 9.5 16Z");
}

.ecoig_bwg {
  fill: currentColor;
  d: path("M9.5 7h5v9L12 13.5 9.5 16Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hpthd_boc {
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.r1tpzrwqw {
  fill: currentColor;
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="r1tpzrwqw"/><path class="ecoig_bwg"/><path class="hpthd_boc"/><path class="cj2au9bnv"/></g>`,
		"fallback": "iconmind:reserved-node-duotone-bold",
	});
}

export default Component;
