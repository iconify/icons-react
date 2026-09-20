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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r1s9ccb7q {
  d: path("M9 21v-6a2 2 0 0 1 4 0v-4a2 2 0 0 1 4 0v5");
}

.yxv11bcbk {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.zaehmnb6i {
  d: path("M6 8h6");
}
</style><g class="hntgybcog"><path class="yxv11bcbk"/><path class="r1s9ccb7q"/><path class="zaehmnb6i"/></g>`,
		"fallback": "iconmind:tutorial-outline-thin",
	});
}

export default Component;
