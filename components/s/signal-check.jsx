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
		"content": `<style>.zwgveh6fe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5V21m3.25-7v7M9 10.5V21m3.25-14v9.8m0 2.4V21M15.5 3v12.3m-.75 2.7l2 2L21 15.75");
}
</style><path class="zwgveh6fe"/>`,
		"fallback": "uix:signal-check",
	});
}

export default Component;
