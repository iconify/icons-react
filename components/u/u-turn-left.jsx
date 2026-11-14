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
		"content": `<style>.aam547bxs {
  d: path("m4.5 13l3 3l3-3");
}

.cjd8zwb6b {
  d: path("M17.5 20V10a5 5 0 0 0-10 0v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cjd8zwb6b"/><path class="aam547bxs"/></g>`,
		"fallback": "uix:u-turn-left",
	});
}

export default Component;
