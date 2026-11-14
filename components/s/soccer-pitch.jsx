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
		"content": `<style>.cd6t2pb9g {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0M2.5 8.5h3v7h-3m19-7h-3v7h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hsrg1hb6k {
  d: path("M5.125 5h13.75A2.625 2.625 0 0 1 21.5 7.625v8.75A2.625 2.625 0 0 1 18.875 19H5.125A2.625 2.625 0 0 1 2.5 16.375v-8.75A2.625 2.625 0 0 1 5.125 5M12 5v14");
}
</style><g class="hntgybcog"><path class="hsrg1hb6k"/><path class="cd6t2pb9g"/></g>`,
		"fallback": "uix:soccer-pitch",
	});
}

export default Component;
