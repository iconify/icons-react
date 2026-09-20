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
		"content": `<style>.eln6o_xbv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fsi7fbbnr {
  d: path("M13.5 15h5");
}

.g9_eu8bfj {
  d: path("M5.5 9h5");
}

.gg9qhlhxo {
  d: path("M8 4v16");
}

.naxn86buc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pa1ot6bmg {
  d: path("M16 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u243jw2ov {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5.5 9h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u9zb518vb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13.5 15h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="naxn86buc"/><path class="eln6o_xbv"/><path class="u243jw2ov"/><path class="u9zb518vb"/><path class="gg9qhlhxo"/><path class="pa1ot6bmg"/><path class="g9_eu8bfj"/><path class="fsi7fbbnr"/></g>`,
		"fallback": "iconmind:parameters-duotone-bold",
	});
}

export default Component;
