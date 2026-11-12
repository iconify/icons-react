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
		"content": `<style>.ags-59u9n {
  d: path("M5 16H5.0001");
}

.akly-1bxp {
  d: path("M5 6H5.0001");
}

.cssq9mzyi {
  d: path("M10 6H20");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i2fyp1btn {
  d: path("M10 11H20");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.tlafrnbwh {
  d: path("M5 11H5.0001");
}

.u3oqugmqn {
  d: path("M10 16H20");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="cssq9mzyi"/><path class="i2fyp1btn"/><path class="u3oqugmqn"/><path class="akly-1bxp"/><path class="tlafrnbwh"/><path class="ags-59u9n"/></g>`,
		"fallback": "solar:list-unordered-minimalistic-line-duotone",
	});
}

export default Component;
