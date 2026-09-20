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
		"content": `<style>.a51oytv8p {
  d: path("M13 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.h3z56pbbf {
  d: path("M2 20a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.h5sglqb0f {
  d: path("m4 20 5 -5v-5l5 -5");
}

.pv_diebju {
  d: path("M17 21h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z_si_bbvo {
  d: path("M8 12.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="h5sglqb0f"/><path class="h3z56pbbf"/><path class="z_si_bbvo"/><path class="a51oytv8p"/><path class="pv_diebju"/></g>`,
		"fallback": "iconmind:learning-path-outline-bold",
	});
}

export default Component;
