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
		"content": `<style>.fycpqq3xc {
  d: path("m8.5 11.25l3 3L20.25 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qolxszbke {
  d: path("M20.25 12v5.75a2.5 2.5 0 0 1-2.5 2.5H6.25a2.5 2.5 0 0 1-2.5-2.5V6.25a2.5 2.5 0 0 1 2.5-2.5h8.25");
}
</style><g class="hntgybcog"><path class="qolxszbke"/><path class="fycpqq3xc"/></g>`,
		"fallback": "iconoven:task-plus",
	});
}

export default Component;
