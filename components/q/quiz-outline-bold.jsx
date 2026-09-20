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
		"content": `<style>.f4ily5bwp {
  d: path("M10.5 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.kpt6n0b9i {
  d: path("M9 10a2.5 2.5 0 0 1 5 0c0 2 -2.5 2 -2.5 3.5");
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="okud9xj_d"/><path class="kpt6n0b9i"/><path class="f4ily5bwp"/></g>`,
		"fallback": "iconmind:quiz-outline-bold",
	});
}

export default Component;
