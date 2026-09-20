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
		"content": `<style>.gvu3jzbph {
  d: path("M14 9.5v5");
}

.lqcp5xb1v {
  d: path("M4 3h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s3kgq-l9e {
  d: path("M10 9.5v5");
}

.t3vzob-fn {
  d: path("M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6 6 6 0 0 1 -6 6H8a6 6 0 0 1 -6 -6");
}

.uxyzhxvwz {
  d: path("M7 12h10");
}
</style><g class="s0phu2bbs"><path class="lqcp5xb1v"/><path class="t3vzob-fn"/><path class="uxyzhxvwz"/><path class="s3kgq-l9e"/><path class="gvu3jzbph"/></g>`,
		"fallback": "iconmind:span-id-outline-bold",
	});
}

export default Component;
