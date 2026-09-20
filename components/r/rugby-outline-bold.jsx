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
		"content": `<style>.epka50bri {
  d: path("M3 12c3 -4 6 -7 9 -7s6 3 9 7c-3 4 -6 7 -9 7s-6 -3 -9 -7");
}

.f2vh026ub {
  d: path("M10 9h4");
}

.fkf_gcbra {
  d: path("M10 15h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y0y0ccsoe {
  d: path("M10 12h4");
}
</style><g class="s0phu2bbs"><path class="epka50bri"/><path class="f2vh026ub"/><path class="y0y0ccsoe"/><path class="fkf_gcbra"/></g>`,
		"fallback": "iconmind:rugby-outline-bold",
	});
}

export default Component;
