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
		"content": `<style>.wvb7--npp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.772 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.972.001 1.863.152M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8 14l.5-2.25A3.5 3.5 0 1 1 16.25 20Z");
}
</style><path class="wvb7--npp"/>`,
		"fallback": "uix:interview",
	});
}

export default Component;
