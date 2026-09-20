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
		"content": `<style>.c7dgfu7wx {
  d: path("M2 4h20");
}

.cwwg2gv6o {
  d: path("M13 13a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
}

.h8uaxgswm {
  d: path("M4 8v12h16V8");
}

.qynh2c4wy {
  d: path("M7 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="h8uaxgswm"/><path class="c7dgfu7wx"/><path class="qynh2c4wy"/><path class="cwwg2gv6o"/></g>`,
		"fallback": "iconmind:object-store-outline-bold",
	});
}

export default Component;
