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
		"content": `<style>.f76ywjbtb {
  d: path("M5 8h9");
}

.g7d56fjnv {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.k8_np0a0y {
  d: path("M17 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.n_po3-i3k {
  fill: currentColor;
  d: path("M17 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
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

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="s0phu2bbs"><path class="g7d56fjnv"/><path class="n_po3-i3k"/><path class="vyks9vbfn"/><path class="x26a8iq1c"/><path class="f76ywjbtb"/><path class="k8_np0a0y"/></g>`,
		"fallback": "iconmind:watermark-column-duotone-bold",
	});
}

export default Component;
