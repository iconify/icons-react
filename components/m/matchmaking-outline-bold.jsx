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
		"content": `<style>.pm30vmtce {
  d: path("M2 9a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.qtxvlht3c {
  d: path("M8 17h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vc2-n5bxy {
  d: path("m11 14 -3 3 3 3");
}

.w_nev909g {
  d: path("m13 14 3 3 -3 3");
}

.xr2rcq_ip {
  d: path("M14 9a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="s0phu2bbs"><path class="pm30vmtce"/><path class="xr2rcq_ip"/><path class="qtxvlht3c"/><path class="vc2-n5bxy"/><path class="w_nev909g"/></g>`,
		"fallback": "iconmind:matchmaking-outline-bold",
	});
}

export default Component;
