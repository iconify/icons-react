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
		"content": `<style>.f3v_s9bsz {
  d: path("M10.75 8a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M3 20.5C3 17.25 5.75 15 9.5 15s6.5 2.25 6.5 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r5cjekb_s {
  d: path("M8 20.5c0-3.25 2.75-5.5 6.5-5.5s6.5 2.25 6.5 5.5");
}

.znsj7bbfr {
  d: path("M5.75 8a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}
</style><g class="hntgybcog"><path class="znsj7bbfr"/><path class="f3v_s9bsz"/><path class="r5cjekb_s"/></g>`,
		"fallback": "uix:mutual-friends",
	});
}

export default Component;
