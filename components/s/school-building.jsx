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

.ub_-pcbch {
  d: path("M10.25 20.5v-3.25a1.75 1.75 0 0 1 3.5 0v3.25M12 12h.01m-7.26 4h.01m14.49 0h.01");
}

.x1k5qcbmf {
  d: path("M2.5 20.5v-8H7v-2l5-4l5 4v2h4.5v8Zm9.5-14v-4l3.5 1l-3.5 1");
}
</style><g class="hntgybcog"><path class="x1k5qcbmf"/><path class="ub_-pcbch"/></g>`,
		"fallback": "uix:school-building",
	});
}

export default Component;
