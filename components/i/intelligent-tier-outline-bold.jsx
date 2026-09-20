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
		"content": `<style>.lu1q1nb0a {
  d: path("M3 10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tx9t6ss1e {
  d: path("M9 2.5V5");
}

.v1-5vcb6e {
  d: path("M6.5 4.5 9 2l2.5 2.5");
}

.xx2yy-3zb {
  d: path("M12.5 19.5 15 22l2.5 -2.5");
}

.z1422pb_r {
  d: path("M15 19v2.5");
}
</style><g class="s0phu2bbs"><path class="lu1q1nb0a"/><path class="tx9t6ss1e"/><path class="v1-5vcb6e"/><path class="z1422pb_r"/><path class="xx2yy-3zb"/></g>`,
		"fallback": "iconmind:intelligent-tier-outline-bold",
	});
}

export default Component;
