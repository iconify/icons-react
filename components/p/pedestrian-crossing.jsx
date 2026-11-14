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
		"content": `<style>.tgia2gayz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M12 9l-1 4.5L8 18m3-4.5l3 1.5l.5 3.5m-6-6.5L10 9.5l2-.5l2.5 1.5l2 2M3 21.5h4m3 0h4m3 0h4");
}
</style><path class="tgia2gayz"/>`,
		"fallback": "uix:pedestrian-crossing",
	});
}

export default Component;
