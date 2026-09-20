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
		"content": `<style>.dwj8i8b7i {
  d: path("M6 10c1 2 3 2 4 0 1 2 3 2 4 0 1 2 3 2 4 0");
}

.nca7pq6lm {
  d: path("m4 10 8 -8 8 8");
}

.qcx0_7byx {
  d: path("M6 10v10h12V10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="nca7pq6lm"/><path class="qcx0_7byx"/><path class="dwj8i8b7i"/></g>`,
		"fallback": "iconmind:social-event-outline-bold",
	});
}

export default Component;
