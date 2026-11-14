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
		"content": `<style>.fy6o9pesj {
  d: path("m4.5 3l4 7.5h7l4-7.5M12 10.5V15m-3.5 6.5L12 15l3.5 6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nju5y6ykj {
  d: path("M9.25 5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}
</style><g class="hntgybcog"><path class="nju5y6ykj"/><path class="fy6o9pesj"/></g>`,
		"fallback": "uix:seventh-inning-stretch",
	});
}

export default Component;
