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
		"content": `<style>.kr5if0b2e {
  fill: currentColor;
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ozoo-24et {
  fill: currentColor;
  d: path("M14.5 14a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ppbx_abyw {
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uwoqp4t1z {
  d: path("M14.5 14a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.v-u0ijc7h {
  d: path("M3 21a6 6 0 0 1 12 0");
}

.wepfk1i9t {
  d: path("M16 12a2 2 0 0 1 4 0");
}
</style><g class="s0phu2bbs"><path class="kr5if0b2e"/><path class="ozoo-24et"/><path class="ppbx_abyw"/><path class="v-u0ijc7h"/><path class="uwoqp4t1z"/><path class="wepfk1i9t"/></g>`,
		"fallback": "iconmind:user-lock-duotone-bold",
	});
}

export default Component;
