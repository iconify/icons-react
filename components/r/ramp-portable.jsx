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
		"content": `<style>.cn_1flbsa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.049 13.22l11.169-6.825a1.5 1.5 0 0 1 2.282 1.28V14.5A1.5 1.5 0 0 1 19 16H7.831a1.5 1.5 0 0 1-.782-2.78M2.5 19h19");
}
</style><path class="cn_1flbsa"/>`,
		"fallback": "uix:ramp-portable",
	});
}

export default Component;
