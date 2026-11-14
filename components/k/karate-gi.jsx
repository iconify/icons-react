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
		"content": `<style>.rhyv67r2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3L3 6l-.5 6.5H6v9h12v-9h3.5L21 6l-5.5-3m-7 0l4 11.5m3-11.5l-5 5.75M6 14.5h12m-5.5 0l-2 4m2-4l2 4");
}
</style><path class="rhyv67r2b"/>`,
		"fallback": "uix:karate-gi",
	});
}

export default Component;
