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
		"content": `<style>.lpgt0c4dm {
  d: path("M5 14h8");
}

.m0msdy1bm {
  d: path("M5 11h4");
}

.murw5tb-p {
  d: path("M2 9a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.n86k7nb-x {
  d: path("M12 11h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="murw5tb-p"/><path class="m0msdy1bm"/><path class="n86k7nb-x"/><path class="lpgt0c4dm"/></g>`,
		"fallback": "iconmind:passphrase-outline-bold",
	});
}

export default Component;
