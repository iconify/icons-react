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
		"content": `<style>.aai5cvb0q {
  d: path("M4 10a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.g69nh1q2b {
  d: path("m5.5 13.5 -3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ury5s7a4p {
  d: path("m22 12 -5 5");
}

.x6kbyg_lb {
  d: path("m17 12 5 5");
}
</style><g class="s0phu2bbs"><path class="aai5cvb0q"/><path class="g69nh1q2b"/><path class="x6kbyg_lb"/><path class="ury5s7a4p"/></g>`,
		"fallback": "iconmind:no-results-outline-bold",
	});
}

export default Component;
