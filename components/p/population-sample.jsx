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

.l2qs_hb9p {
  d: path("M6.75 12.5a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0");
}

.w6rghzbpg {
  d: path("M10.25 10.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M9 16.25c0-1.5 1.25-2.5 3-2.5s3 1 3 2.5m-12.75-5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m0 4.5c0-1.25.5-2 1.5-2s1.5.75 1.5 2m13.5-4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m0 4.5c0-1.25.5-2 1.5-2s1.5.75 1.5 2");
}
</style><g class="hntgybcog"><path class="l2qs_hb9p"/><path class="w6rghzbpg"/></g>`,
		"fallback": "uix:population-sample",
	});
}

export default Component;
