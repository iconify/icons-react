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
		"content": `<style>.ebcu1lbmd {
  d: path("M7 4.5h10A3.5 3.5 0 0 1 20.5 8v9.5A3.5 3.5 0 0 1 17 21H7a3.5 3.5 0 0 1-3.5-3.5V8A3.5 3.5 0 0 1 7 4.5m1-2v4m8-4v4m-12.5 3h17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r5wf5zpyz {
  d: path("M8.5 18.25c0-4.25 2.5-6 7.25-6c0 4.25-2.75 6-7.25 6");
}
</style><g class="hntgybcog"><path class="ebcu1lbmd"/><path class="r5wf5zpyz"/></g>`,
		"fallback": "uix:meat-free-day",
	});
}

export default Component;
