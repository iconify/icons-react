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
		"content": `<style>.b4kz1mf_t {
  d: path("M3.75 13.25a8.25 8.25 0 1 0 16.5 0a8.25 8.25 0 1 0-16.5 0M12 2.5V5M9.5 2.5h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8iid8bfo {
  fill: currentColor;
  d: path("M10.5 10h3a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 10.5 10");
}
</style><g class="hntgybcog"><path class="b4kz1mf_t"/><path class="y8iid8bfo"/></g>`,
		"fallback": "uix:stopwatch-stop",
	});
}

export default Component;
