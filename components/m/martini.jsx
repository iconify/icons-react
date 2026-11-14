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
		"content": `<style>.dq4lijbge {
  d: path("M12 21v-7.5L3.5 4h17L12 13.5M8 21h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kyci7r_fe {
  d: path("M10.5 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m1.5 0l5.5-5");
}
</style><g class="hntgybcog"><path class="dq4lijbge"/><path class="kyci7r_fe"/></g>`,
		"fallback": "uix:martini",
	});
}

export default Component;
