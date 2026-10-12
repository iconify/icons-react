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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.klvo5ib9n {
  d: path("M12 17s-4.25-2.5-4.25-5.5a2.15 2.15 0 0 1 4.25-.75a2.15 2.15 0 0 1 4.25.75c0 3-4.25 5.5-4.25 5.5");
}

.sq0s0082k {
  d: path("M4.5 7.25a8.5 8.5 0 1 1-1 4.75m.25-8.25V7.5H7.5");
}
</style><g class="hntgybcog"><path class="sq0s0082k"/><path class="klvo5ib9n"/></g>`,
		"fallback": "iconoven:memories-clock",
	});
}

export default Component;
