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
		"content": `<style>.dupv38a4z {
  d: path("M3 17h18c.75-6-3-9.5-9-9.5S2.25 11 3 17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o2e0w1bey {
  d: path("M6 13q6 1.75 12 0");
}
</style><g class="hntgybcog"><path class="dupv38a4z"/><path class="o2e0w1bey"/></g>`,
		"fallback": "uix:meditation-cushion",
	});
}

export default Component;
