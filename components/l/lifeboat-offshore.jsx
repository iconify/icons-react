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
		"content": `<style>.mjofkrbqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11.25h18l-1.5 4h-15Zm2 0c0-3.5 3-4.5 7-4.5s7 1 7 4.5m-9-4.5a2 2 0 0 1 4 0m-11.5 12q2.375-1.5 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><path class="mjofkrbqz"/>`,
		"fallback": "uix:lifeboat-offshore",
	});
}

export default Component;
