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
		"content": `<style>.dqwsaw3yb {
  fill: currentColor;
  d: path("M8 3C5.75 3 4.25 4.25 4 7h16c-.25-2.75-1.75-4-4-4c-1.5 0-2.5 1-4 1S9.5 3 8 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oita7557l {
  d: path("M8 3C5 3 4 5 4 8s1.5 5 2.5 7l1 5c.25 1.25 1.75 1.25 2 0l1-4.5c.25-1 2.75-1 3 0l1 4.5c.25 1.25 1.75 1.25 2 0l1-5c1-2 2.5-4 2.5-7s-1-5-4-5c-1.5 0-2.5 1-4 1S9.5 3 8 3");
}
</style><g class="hntgybcog"><path class="oita7557l"/><path class="dqwsaw3yb"/></g>`,
		"fallback": "uix:tooth-gold",
	});
}

export default Component;
