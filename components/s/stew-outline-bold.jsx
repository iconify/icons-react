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
		"content": `<style>.c74kujgny {
  d: path("m14 13 5 -5");
}

.fyvf420mr {
  d: path("M4 11h16c0 5 -4 9 -8 9s-8 -4 -8 -9");
}

.quidtccfi {
  d: path("M9 9c2 -2 0 -4 2 -6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="fyvf420mr"/><path class="c74kujgny"/><path class="quidtccfi"/></g>`,
		"fallback": "iconmind:stew-outline-bold",
	});
}

export default Component;
