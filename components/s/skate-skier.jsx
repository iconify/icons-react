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
		"content": `<style>.omi7-go7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21.5L4.5 5Q4 3 5.75 2.75M14 21.5L19.5 5q.5-2-1.25-2.25M2.5 21l2.25-6.5M21.5 21l-2.25-6.5");
}
</style><path class="omi7-go7p"/>`,
		"fallback": "uix:skate-skier",
	});
}

export default Component;
