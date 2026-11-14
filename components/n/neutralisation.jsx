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
		"content": `<style>.c_f752ybl {
  d: path("M10.25 14h4L12 19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sn6dsipbn {
  d: path("M8.5 3h7M10 3v6L4.5 19.25q-.75 2.25 1.75 2.25h11.5q2.5 0 1.75-2.25L14 9V3");
}
</style><g class="hntgybcog"><path class="sn6dsipbn"/><path class="c_f752ybl"/></g>`,
		"fallback": "uix:neutralisation",
	});
}

export default Component;
