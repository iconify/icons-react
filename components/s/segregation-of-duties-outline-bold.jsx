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
		"content": `<style>.a218-cpca {
  d: path("M4 5h16a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4V7a2 2 0 0 1 2 -2");
}

.d8gf8fboh {
  d: path("M7.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.h7bcztycq {
  d: path("M12 8v8");
}

.nt94z-wbn {
  d: path("M14.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="a218-cpca"/><path class="h7bcztycq"/><path class="d8gf8fboh"/><path class="nt94z-wbn"/></g>`,
		"fallback": "iconmind:segregation-of-duties-outline-bold",
	});
}

export default Component;
