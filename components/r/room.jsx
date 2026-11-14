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
		"content": `<style>.cv-85xbvy {
  d: path("M9 21a6 6 0 0 1 6-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjyru6cpq {
  d: path("M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4m0 0v-6");
}
</style><g class="hntgybcog"><path class="vjyru6cpq"/><path class="cv-85xbvy"/></g>`,
		"fallback": "uix:room",
	});
}

export default Component;
