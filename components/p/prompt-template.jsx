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

.qj3ezibod {
  d: path("M9 8.25h-.5A1.25 1.25 0 0 0 7.25 9.5v1.25l-1 1.25l1 1.25v1.25a1.25 1.25 0 0 0 1.25 1.25H9m6-7.5h.5a1.25 1.25 0 0 1 1.25 1.25v1.25l1 1.25l-1 1.25v1.25a1.25 1.25 0 0 1-1.25 1.25H15M10.75 12h2.5");
}

.ucxu3gbut {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 4.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="ucxu3gbut"/><path class="qj3ezibod"/></g>`,
		"fallback": "iconoven:prompt-template",
	});
}

export default Component;
