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

.o-895qt5t {
  d: path("M3 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m13 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.psmd6bbsj {
  d: path("M5.5 17.5H14l2.5-11H19m-6 0h3.5");
}
</style><g class="hntgybcog"><path class="o-895qt5t"/><path class="psmd6bbsj"/></g>`,
		"fallback": "uix:scooter-rental",
	});
}

export default Component;
