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
		"content": `<style>.bdvf6t_rz {
  d: path("M7.5 13a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.hgon-pbwq {
  d: path("M5 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mhqlqeb7x {
  d: path("M18 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.oq9ztqbxu {
  d: path("M11 4a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.q7dxcnbil {
  d: path("M17 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.qyt_1qaov {
  d: path("M4 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="bdvf6t_rz"/><path class="qyt_1qaov"/><path class="oq9ztqbxu"/><path class="mhqlqeb7x"/><path class="hgon-pbwq"/><path class="q7dxcnbil"/></g>`,
		"fallback": "iconmind:pollen-high-outline-bold",
	});
}

export default Component;
