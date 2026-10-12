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
		"content": `<style>.f9z3l_b3d {
  d: path("M12 12v3.25l2.25 1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o01lnbc1u {
  d: path("M12 9c-1.5-1-3-1.25-4.5-1c-2.75.5-4.25 3-4.25 6c0 4.25 3.75 7.25 8.75 7.25s8.75-3 8.75-7.25c0-3-1.5-5.5-4.25-6c-1.5-.25-3 0-4.5 1M8.25 4.5c1.25 1.25 2.5 1.25 3.75.25c1.25 1 2.5 1 3.75-.25M12 2.75v2");
}
</style><g class="hntgybcog"><path class="o01lnbc1u"/><path class="f9z3l_b3d"/></g>`,
		"fallback": "iconoven:pomodoro",
	});
}

export default Component;
