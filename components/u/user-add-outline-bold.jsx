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
		"content": `<style>.nuz6-76is {
  d: path("M15 12h6");
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

.v-u0ijc7h {
  d: path("M3 21a6 6 0 0 1 12 0");
}

.x2sfcqbvg {
  d: path("M18 9v6");
}
</style><g class="s0phu2bbs"><path class="ppbx_abyw"/><path class="v-u0ijc7h"/><path class="x2sfcqbvg"/><path class="nuz6-76is"/></g>`,
		"fallback": "iconmind:user-add-outline-bold",
	});
}

export default Component;
