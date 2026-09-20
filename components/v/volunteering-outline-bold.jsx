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
		"content": `<style>.aoab3jb-t {
  d: path("M4 21v-4c0 -2 2 -3 4 -3h8c2 0 4 1 4 3v4");
}

.l82dq04ml {
  d: path("M12 12c-2.5 -2 -6 -4.5 -4.5 -7 1 -1.5 3 -1 4.5 1 1.5 -2 3.5 -2.5 4.5 -1 1.5 2.5 -2 5 -4.5 7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="l82dq04ml"/><path class="aoab3jb-t"/></g>`,
		"fallback": "iconmind:volunteering-outline-bold",
	});
}

export default Component;
