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

.xdjir0lzh {
  d: path("M15.75 17.5L17 18.75l2.5-2.5");
}

.xgwym9w0p {
  d: path("M11.372 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.598 0 1.166.058M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m7 10.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="xgwym9w0p"/><path class="xdjir0lzh"/></g>`,
		"fallback": "uix:verified-user",
	});
}

export default Component;
