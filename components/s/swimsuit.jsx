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

.sfawmbxfv {
  d: path("M7.5 2.75H9q.75 4.5 3 4.5c2.25 0 2.5-1.5 3-4.5h1.5c0 3.5 1.25 5.5 1.25 8.5c0 2.5-1 4-1 6c-2 0-3.25 1.25-4 3.75h-1.5c-.75-2.5-2-3.75-4-3.75c0-2-1-3.5-1-6c0-3 1.25-5 1.25-8.5");
}

.w515kd1fk {
  d: path("M6.75 13c3.25.75 7.25.75 10.5 0");
}
</style><g class="hntgybcog"><path class="sfawmbxfv"/><path class="w515kd1fk"/></g>`,
		"fallback": "iconoven:swimsuit",
	});
}

export default Component;
