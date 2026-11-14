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
		"content": `<style>.g4w_blhwd {
  d: path("M16 20v-2.5a1.5 1.5 0 0 1 1.5-1.5H20m-9.75-5.5h2.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 12.75 15h-2.5a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75m-.5 0v-1a1.75 1.75 0 0 1 3.5 0v1");
}

.hgz3jvbnt {
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10l-4 4H6a2 2 0 0 1-2-2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hgz3jvbnt"/><path class="g4w_blhwd"/></g>`,
		"fallback": "uix:note-lock",
	});
}

export default Component;
