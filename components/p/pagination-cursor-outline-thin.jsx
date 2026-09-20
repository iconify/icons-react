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

.eskbyryvt {
  d: path("m10 14.5 2 2 2 -2");
}

.f9z-0cczq {
  d: path("M9 10.5h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mfc7nxp-y {
  d: path("M9 7h6");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="mfc7nxp-y"/><path class="f9z-0cczq"/><path class="eskbyryvt"/></g>`,
		"fallback": "iconmind:pagination-cursor-outline-thin",
	});
}

export default Component;
