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
		"content": `<style>.dk5wt9tbn {
  d: path("M6 9v3.5h2.5V9m-1.25 3.5V17M12 9v8m3.5-8v3.5H18V9m-1.25 3.5V17M4.5 17v3.5m15-3.5v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m6rjg-b8q {
  d: path("M6 4h12a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 18 17H6a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 6 4M2.5 9h19");
}
</style><g class="hntgybcog"><path class="m6rjg-b8q"/><path class="dk5wt9tbn"/></g>`,
		"fallback": "uix:toy-piano",
	});
}

export default Component;
