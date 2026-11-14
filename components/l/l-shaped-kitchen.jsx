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

.jlaaxj_te {
  d: path("M2.5 2.5h19V12H12v9.5H2.5Z");
}

.jzo90zgrf {
  d: path("M5.25 7.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="jlaaxj_te"/><path class="jzo90zgrf"/></g>`,
		"fallback": "uix:l-shaped-kitchen",
	});
}

export default Component;
