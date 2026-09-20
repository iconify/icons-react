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
		"content": `<style>.hm9g1fb2w {
  d: path("M19 11v3");
}

.jyebykb6y {
  d: path("M19 16v3");
}

.qvwmt5y0l {
  d: path("M19 5v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x7aiqk4zc {
  d: path("M2 12a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.y0gt-cbtb {
  d: path("M9 8v4h3.5");
}
</style><g class="s0phu2bbs"><path class="x7aiqk4zc"/><path class="y0gt-cbtb"/><path class="qvwmt5y0l"/><path class="hm9g1fb2w"/><path class="jyebykb6y"/></g>`,
		"fallback": "iconmind:schedule-cron-outline-bold",
	});
}

export default Component;
