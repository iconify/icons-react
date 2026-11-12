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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p-202iw1z {
  d: path("M10 16H20");
}

.qps5lmbju {
  d: path("M10 6H20");
}

.tlafrnbwh {
  d: path("M5 11H5.0001");
}

.zhrd6xn3e {
  d: path("M10 11H20");
}
</style><g class="hntgybcog"><path class="qps5lmbju"/><path class="zhrd6xn3e"/><path class="p-202iw1z"/><path class="akly-1bxp"/><path class="tlafrnbwh"/><path class="ags-59u9n"/></g>`,
		"fallback": "solar:list-unordered-minimalistic-linear",
	});
}

export default Component;
