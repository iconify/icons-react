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

.jy1e83u6i {
  d: path("M17.5 10.375zA.84.84 0 0 0 18.625 10a.347.347 0 0 0-.42-.485l-.66.22a.347.347 0 0 0-.045.64m.75 2.875a3.5 3.5 0 0 1-6.5 0");
}

.qs3q9ozwu {
  d: path("M12.5 13.625za.84.84 0 0 0-1.125.375a.347.347 0 0 0 .42.485l.66-.22a.347.347 0 0 0 .045-.64");
}

.t5xllubfd {
  d: path("M5.5 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6.25-1.25a3.5 3.5 0 0 1 6.5 0");
}

.yot951bfk {
  d: path("m2 12l4.5-7H20q2 0 2 2v10q0 2-2 2H6.5Z");
}
</style><g class="hntgybcog"><path class="yot951bfk"/><path class="t5xllubfd"/><path class="jy1e83u6i"/><path class="qs3q9ozwu"/></g>`,
		"fallback": "uix:recycled-content",
	});
}

export default Component;
