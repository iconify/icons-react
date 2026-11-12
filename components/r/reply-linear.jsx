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
		"content": `<style>.jpeowxwxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 17L4.5 12L9.5 7M4.5 12L14.5 12C16.1667 12 19.5 13 19.5 17");
}
</style><path class="jpeowxwxq"/>`,
		"fallback": "solar:reply-linear",
	});
}

export default Component;
