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
		"content": `<style>.drtvz1btn {
  cx: 12px;
  cy: 8.5px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vk0qikjba {
  d: path("M4.75 8V5.25a1.5 1.5 0 0 1 1.5-1.5H9m6 0h2.75a1.5 1.5 0 0 1 1.5 1.5V8m0 8v2.75a1.5 1.5 0 0 1-1.5 1.5H15m-6 0H6.25a1.5 1.5 0 0 1-1.5-1.5V16");
}

.ygyw9ob-w {
  d: path("M7.75 17.5a4.25 4.25 0 0 1 8.5 0Z");
}
</style><g class="hntgybcog"><path class="vk0qikjba"/><circle class="drtvz1btn"/><path class="ygyw9ob-w"/></g>`,
		"fallback": "iconoven:portrait-mode",
	});
}

export default Component;
