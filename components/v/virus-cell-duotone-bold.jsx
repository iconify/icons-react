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
		"content": `<style>.b6rlx8mlt {
  d: path("M12 5q4.5 0 6 3c2 1 2 5 0 7q-1.5 3 -6 3t-6 -3c-2 -2 -2 -6 0 -7q1.5 -3 6 -3");
}

.ghavz0bas {
  d: path("m19 8 3 -3");
}

.ljad-6hjd {
  d: path("M12 5V2");
}

.s_kknnbrx {
  fill: currentColor;
  d: path("M12 5q4.5 0 6 3c2 1 2 5 0 7q-1.5 3 -6 3t-6 -3c-2 -2 -2 -6 0 -7q1.5 -3 6 -3");
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

.t847zkbua {
  d: path("m5 16 -3 3");
}
</style><g class="s0phu2bbs"><path class="s_kknnbrx"/><path class="b6rlx8mlt"/><path class="ljad-6hjd"/><path class="ghavz0bas"/><path class="t847zkbua"/></g>`,
		"fallback": "iconmind:virus-cell-duotone-bold",
	});
}

export default Component;
