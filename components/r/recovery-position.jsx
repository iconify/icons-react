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

.kz2stkavq {
  d: path("m9 13.25l-1.5 2.5H3m6.75-2.5l1.5-3.75");
}

.v1pspbaus {
  d: path("M6.75 13.25h6.75l7.5 1.5m-7.5-1.5l3-4l3 3.75m-17 5h19m-19-6.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="v1pspbaus"/><path class="kz2stkavq"/></g>`,
		"fallback": "uix:recovery-position",
	});
}

export default Component;
