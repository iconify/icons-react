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
		"content": `<style>.fqjbkn2kp {
  d: path("M8 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.it8-m-z-e {
  d: path("M19 9c2 3 2 7 0 10");
}

.p6ibjbc2t {
  d: path("M3 20v-8l7 -7 7 7v8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="p6ibjbc2t"/><path class="fqjbkn2kp"/><path class="it8-m-z-e"/></g>`,
		"fallback": "iconmind:smart-home-outline-bold",
	});
}

export default Component;
