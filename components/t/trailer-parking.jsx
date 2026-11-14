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

.rzl5atbza {
  d: path("M7 4.5h10A3.5 3.5 0 0 1 20.5 8v8a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 16V8A3.5 3.5 0 0 1 7 4.5");
}

.ujf638e5v {
  d: path("M9 16.5V8h3.5a2.5 2.5 0 0 1 0 5H9");
}
</style><g class="hntgybcog"><path class="rzl5atbza"/><path class="ujf638e5v"/></g>`,
		"fallback": "uix:trailer-parking",
	});
}

export default Component;
