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
		"content": `<style>.cirgusbhj {
  d: path("M17.142 6.872a8 8 0 1 1-10.284 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ntc2gpbtp {
  d: path("M3.75 6.75h3v3M12 3v8");
}
</style><g class="hntgybcog"><path class="cirgusbhj"/><path class="ntc2gpbtp"/></g>`,
		"fallback": "uix:power-restart",
	});
}

export default Component;
