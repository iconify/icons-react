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
		"content": `<style>.acyg6nb1v {
  d: path("M10 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.idhymedkk {
  d: path("m2 20 6 -6 3 3 5 -5 5 5");
}

.oze4upblc {
  d: path("M6.36 5.95a6 6 0 0 1 11.28 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="oze4upblc"/><path class="acyg6nb1v"/><path class="idhymedkk"/></g>`,
		"fallback": "iconmind:viewpoint-outline-bold",
	});
}

export default Component;
