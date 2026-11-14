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

.obpyelcia {
  d: path("M7.5 12.5c0-5.5 2.75-9 7-9s7 3.5 7 9Zm0 0c-2 0-4 .75-5 2.25");
}

.ucvm7l4fl {
  d: path("M14.5 3.5c-2 2-3 5-2.75 9M18 21.25l-2.75-2.75A2 2 0 0 1 18 15.75a2 2 0 0 1 2.75 2.75Z");
}
</style><g class="hntgybcog"><path class="obpyelcia"/><path class="ucvm7l4fl"/></g>`,
		"fallback": "uix:volunteer-cap",
	});
}

export default Component;
