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
		"content": `<style>.fey1yxb1v {
  d: path("M7.413 17h5.733a1.5 1.5 0 0 1 .671.158L17 18.75a.924.924 0 0 1-.413 1.75h-5.733a1.5 1.5 0 0 1-.671-.158L7 18.75A.924.924 0 0 1 7.413 17m6.087 0L15 3M6.5 7h6M6 10.5h5.5m-6 3.5h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t_jz6xylu {
  d: path("M6.348 3h6.983a1.5 1.5 0 0 1 1.491 1.66l-1.178 11A1.5 1.5 0 0 1 12.152 17H5.169a1.5 1.5 0 0 1-1.491-1.66l1.178-11A1.5 1.5 0 0 1 6.348 3");
}
</style><g class="hntgybcog"><path class="t_jz6xylu"/><path class="fey1yxb1v"/></g>`,
		"fallback": "uix:sign-holder-counter",
	});
}

export default Component;
