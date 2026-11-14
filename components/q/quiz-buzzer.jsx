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

.lu8a-i6tb {
  d: path("M10 9.25V5.5h4v3.75");
}

.pz311fk5b {
  d: path("M4.75 16h14.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H4.75a2.25 2.25 0 0 1-2.25-2.25A2.25 2.25 0 0 1 4.75 16M5 16a7 7 0 0 1 14 0");
}
</style><g class="hntgybcog"><path class="pz311fk5b"/><path class="lu8a-i6tb"/></g>`,
		"fallback": "uix:quiz-buzzer",
	});
}

export default Component;
