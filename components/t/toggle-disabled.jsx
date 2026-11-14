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

.hu3v_abqu {
  d: path("M8 17.5a5.5 5.5 0 0 1 0-11m8 0a5.5 5.5 0 0 1 0 11m-5.5-11h3m-3 11h3");
}

.vy0pcpbej {
  d: path("M5 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="hu3v_abqu"/><path class="vy0pcpbej"/></g>`,
		"fallback": "uix:toggle-disabled",
	});
}

export default Component;
