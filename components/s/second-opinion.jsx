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
		"content": `<style>.eysocgb-h {
  d: path("M6 7.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7.5 0h2.25m2.5 0h2.25m-4.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.fgq3f6bfn {
  d: path("M2.5 20.5C2.5 17 4.5 15 7 15s4.5 2 4.5 5.5Zm10 0c0-3.5 2-5.5 4.5-5.5s4.5 2 4.5 5.5Zm-9.25-12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m10 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m-9.75-1h2.25m2.5 0h2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fgq3f6bfn"/><path class="eysocgb-h"/></g>`,
		"fallback": "uix:second-opinion",
	});
}

export default Component;
