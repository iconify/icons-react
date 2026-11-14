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
		"content": `<style>.ap-z57bve {
  d: path("M2.5 4h19v5.5a2.5 2.5 0 0 0 0 5V20h-19v-5.5a2.5 2.5 0 0 0 0-5Zm10 3h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sp_4vy3gf {
  d: path("M12.5 9.5v4h3.25L17 17m-3.046-1.479a3 3 0 1 1-3.98-3.34");
}
</style><g class="hntgybcog"><path class="ap-z57bve"/><path class="sp_4vy3gf"/></g>`,
		"fallback": "uix:ticket-accessible",
	});
}

export default Component;
