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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iq6_b32xf {
  d: path("m8 14 2 2 2 -2 2 2 2 -2");
}

.pty_wsbvs {
  d: path("M8 9h8");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="pty_wsbvs"/><path class="iq6_b32xf"/></g>`,
		"fallback": "iconmind:lint-run-outline-thin",
	});
}

export default Component;
