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

.m84t_4viq {
  d: path("M3.67981 13L3.67981 11.3333C3.67981 6.73096 7.4402 3 12.0789 3C15.1178 3 17.7799 4.60136 19.2545 7M2 11.3333L3.67981 13L5.35962 11.3333");
}

.p4-x7940g {
  d: path("M20.3137 11V12.6667C20.3137 17.269 16.5389 21 11.8825 21C8.83189 21 6.1597 19.3986 4.67944 17M21.9999 12.6667L20.3137 11L18.6274 12.6667");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="m84t_4viq"/><path class="p4-x7940g"/></g>`,
		"fallback": "solar:refresh-line-duotone",
	});
}

export default Component;
