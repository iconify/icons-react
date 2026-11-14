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
		"content": `<style>.d-3cqzb-s {
  d: path("m15 12l2.5 2.5L15 17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.in6wolo3y {
  d: path("M3.5 4v14a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V4M12 4v16M3.5 10H12m0-3h8.5m-14 7.5h11");
}
</style><g class="hntgybcog"><path class="in6wolo3y"/><path class="d-3cqzb-s"/></g>`,
		"fallback": "uix:osmosis",
	});
}

export default Component;
