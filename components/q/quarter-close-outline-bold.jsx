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
		"content": `<style>.c--omxb4v {
  d: path("M12.5 14a1.5 1.5 0 0 1 3 0");
}

.oopkshskt {
  d: path("M11 14h6v3h-6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wuvisubmw {
  d: path("M8 3v18");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="y4_6s7b5v"/><path class="wuvisubmw"/><path class="oopkshskt"/><path class="c--omxb4v"/></g>`,
		"fallback": "iconmind:quarter-close-outline-bold",
	});
}

export default Component;
