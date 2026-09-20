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
		"content": `<style>.drx1bdb7s {
  d: path("m13 15 3 3 5 -5");
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tkvxdludj {
  d: path("M6 3h9l-3 3 3 3H6");
}
</style><g class="s0phu2bbs"><path class="ftqzjnb8u"/><path class="tkvxdludj"/><path class="drx1bdb7s"/></g>`,
		"fallback": "iconmind:milestone-flag-outline-bold",
	});
}

export default Component;
