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

.me177l4bh {
  d: path("M11 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mfc7nxp-y {
  d: path("M9 7h6");
}

.nxt-uwbql {
  d: path("M15 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ynh89jb5g {
  d: path("M7 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="mfc7nxp-y"/><path class="f9z-0cczq"/><path class="ynh89jb5g"/><path class="me177l4bh"/><path class="nxt-uwbql"/></g>`,
		"fallback": "iconmind:pagination-offset-outline-thin",
	});
}

export default Component;
