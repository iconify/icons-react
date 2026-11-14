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
		"content": `<style>.j5immhbdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9.5l2-5h14l2 5Zm1.5 0v12m15-12v12M4.5 14h15M9.75 4.5L9 9.5m5.25-5l.75 5m-6 7.25h6a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 20v-1.75a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="j5immhbdb"/>`,
		"fallback": "uix:job-fair",
	});
}

export default Component;
