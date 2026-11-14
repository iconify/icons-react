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

.j7d6jnhnm {
  d: path("M5 14.25L14.25 5A1.5 1.5 0 1 1 17 5a1.5 1.5 0 1 1 0 2.75L7.75 17A1.5 1.5 0 1 1 5 17a1.5 1.5 0 1 1 0-2.75M15.75 16h4.5A1.75 1.75 0 0 1 22 17.75v2.5A1.75 1.75 0 0 1 20.25 22h-4.5A1.75 1.75 0 0 1 14 20.25v-2.5A1.75 1.75 0 0 1 15.75 16");
}

.u3yilo1xa {
  d: path("M16.5 19a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-.5-3l.75-1.5h2.5L20 16");
}
</style><g class="hntgybcog"><path class="j7d6jnhnm"/><path class="u3yilo1xa"/></g>`,
		"fallback": "uix:pet-camera-treat",
	});
}

export default Component;
