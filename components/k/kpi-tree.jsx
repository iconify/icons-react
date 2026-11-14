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
		"content": `<style>.m--cs88mf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.125 2.5h5.75A2.625 2.625 0 0 1 17.5 5.125v1.25A2.625 2.625 0 0 1 14.875 9h-5.75A2.625 2.625 0 0 1 6.5 6.375v-1.25A2.625 2.625 0 0 1 9.125 2.5m-4 12.5h2.75a2.625 2.625 0 0 1 2.625 2.625v.75A2.625 2.625 0 0 1 7.875 21h-2.75A2.625 2.625 0 0 1 2.5 18.375v-.75A2.625 2.625 0 0 1 5.125 15m11 0h2.75a2.625 2.625 0 0 1 2.625 2.625v.75A2.625 2.625 0 0 1 18.875 21h-2.75a2.625 2.625 0 0 1-2.625-2.625v-.75A2.625 2.625 0 0 1 16.125 15M9.5 5.75h5M12 9v3m-5.5 3v-3h11v3");
}
</style><path class="m--cs88mf"/>`,
		"fallback": "uix:kpi-tree",
	});
}

export default Component;
