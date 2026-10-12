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

.ye0-m5mtq {
  d: path("M3.5 20.25h10a.75.75 0 0 0 .75-.75c0-3-2.6-5.25-5.75-5.25S2.75 16.5 2.75 19.5a.75.75 0 0 0 .75.75M15.1 5.5h.3q.6 0 1.02-.42l1.41-1.41q.42-.42.42.18v6.3q0 .6-.42.18l-1.41-1.41Q16 8.5 15.4 8.5h-.3q-.6 0-.6-.6V6.1q0-.6.6-.6m4.4.5l1.75 1.75m0-1.75L19.5 7.75");
}

.yk-0sacrz {
  cx: 8.5px;
  cy: 7.75px;
  r: 3.5px;
}
</style><g class="hntgybcog"><circle class="yk-0sacrz"/><path class="ye0-m5mtq"/></g>`,
		"fallback": "iconoven:mute-user",
	});
}

export default Component;
