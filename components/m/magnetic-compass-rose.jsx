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
		"content": `<style>.azb-kwbyu {
  d: path("m13.125 9l.927 2.473a1.5 1.5 0 0 1 0 1.054L13.125 15a1.202 1.202 0 0 1-2.25 0l-.927-2.473a1.5 1.5 0 0 1 0-1.054L10.875 9a1.202 1.202 0 0 1 2.25 0M9.75 12h4.5M6.5 12h.01m10.99 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j7qjn6psg {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0");
}
</style><g class="hntgybcog"><path class="j7qjn6psg"/><path class="azb-kwbyu"/></g>`,
		"fallback": "uix:magnetic-compass-rose",
	});
}

export default Component;
