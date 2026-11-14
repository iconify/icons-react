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
		"content": `<style>.vje1dub9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h4.5V16H12v-4.5h4.5V7H21M4 12.5L10.5 6m-4 0h4v4");
}
</style><path class="vje1dub9l"/>`,
		"fallback": "uix:kaizen",
	});
}

export default Component;
