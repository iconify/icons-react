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
		"content": `<style>.doha7k7ng {
  d: path("M10 11v7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tbjorldxr {
  d: path("M3 18h7");
}

.uhg14jb-c {
  d: path("M10 11h7");
}

.xh8-ghm1o {
  d: path("M17 4v7");
}
</style><g class="s0phu2bbs"><path class="tbjorldxr"/><path class="doha7k7ng"/><path class="uhg14jb-c"/><path class="xh8-ghm1o"/></g>`,
		"fallback": "iconmind:step-outline-bold",
	});
}

export default Component;
