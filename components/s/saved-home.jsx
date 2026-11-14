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

.santkfb3c {
  d: path("m8.939 9.561l2-2a1.5 1.5 0 0 1 2.122 0l2 2a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 12v-1.379a1.5 1.5 0 0 1 .439-1.06");
}

.ylxmw6bsr {
  d: path("M5.5 4.5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v17l-6.5-5l-6.5 5Z");
}
</style><g class="hntgybcog"><path class="ylxmw6bsr"/><path class="santkfb3c"/></g>`,
		"fallback": "uix:saved-home",
	});
}

export default Component;
