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
		"content": `<style>.az52i5bqg {
  d: path("M9.25 14a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M12 14v-2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o09ce9bjy {
  d: path("M6 4.5h12A3.5 3.5 0 0 1 21.5 8v8a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V8A3.5 3.5 0 0 1 6 4.5m3 3h6");
}
</style><g class="hntgybcog"><path class="o09ce9bjy"/><path class="az52i5bqg"/></g>`,
		"fallback": "uix:monitor-controller",
	});
}

export default Component;
