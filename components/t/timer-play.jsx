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
		"content": `<style>.a046ttf-b {
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0M9.5 2.5h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ut27_vb0k {
  d: path("m12.54 11.167l.9.558a1.5 1.5 0 0 1 0 2.55l-.9.558a1.5 1.5 0 0 1-2.29-1.276v-1.114a1.5 1.5 0 0 1 2.29-1.276");
}
</style><g class="hntgybcog"><path class="a046ttf-b"/><path class="ut27_vb0k"/></g>`,
		"fallback": "uix:timer-play",
	});
}

export default Component;
