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
		"content": `<style>.cf_4npb3r {
  d: path("M8.678 11.791L6.987 8.166l7.251-3.381l1.69 3.625");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yten-pbzd {
  d: path("m4.599 13.693l12.235-5.706M6.712 18.224l12.236-5.705m-3.323-1.209a2.5 2.5 0 0 1 4.532-2.114M3.156 15.958a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 0h.01");
}
</style><g class="hntgybcog"><path class="yten-pbzd"/><path class="cf_4npb3r"/></g>`,
		"fallback": "uix:magic-carpet",
	});
}

export default Component;
