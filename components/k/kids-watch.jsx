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

.plyfp_bhw {
  d: path("M11.25 6h1.5A5.25 5.25 0 0 1 18 11.25v1.5A5.25 5.25 0 0 1 12.75 18h-1.5A5.25 5.25 0 0 1 6 12.75v-1.5A5.25 5.25 0 0 1 11.25 6M8.5 6L9 3h6l.5 3m-7 12l.5 3h6l.5-3m-4.75-7.5h.01m2.49 0h.01");
}

.xgnki0bsy {
  d: path("M14.114 13.02a2.25 2.25 0 0 1-4.228 0");
}
</style><g class="hntgybcog"><path class="plyfp_bhw"/><path class="xgnki0bsy"/></g>`,
		"fallback": "uix:kids-watch",
	});
}

export default Component;
