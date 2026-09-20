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
		"content": `<style>.ngnirel9c {
  d: path("M6 9h8");
}

.nwsr3kbjq {
  d: path("M6 17h6");
}

.p7w9wl2eu {
  d: path("M9 13h8");
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
</style><g class="s0phu2bbs"><path class="vyks9vbfn"/><path class="ngnirel9c"/><path class="p7w9wl2eu"/><path class="nwsr3kbjq"/></g>`,
		"fallback": "iconmind:scratchpad-outline-bold",
	});
}

export default Component;
