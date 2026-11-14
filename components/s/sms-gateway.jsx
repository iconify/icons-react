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
		"content": `<style>.zsv9fuenm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V7a2 2 0 0 1-2 2h-7.5l-3 1.75V9H6a2 2 0 0 1-2-2Zm3.5 9h9A3.5 3.5 0 0 1 20 17v1a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 18v-1a3.5 3.5 0 0 1 3.5-3.5m-3.5 4h16m-6.5-2h3m-3 4h3");
}
</style><path class="zsv9fuenm"/>`,
		"fallback": "uix:sms-gateway",
	});
}

export default Component;
