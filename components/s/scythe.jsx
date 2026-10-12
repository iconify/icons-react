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
		"content": `<style>.j7hu_dbwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 2.75C14.25 6 15.75 8.5 13 12s-4 3.25-4 5.75M14 5l2.5 1m-5.75 5.25l2.5 1M9 17.75c-2.5-.5-5 1-6.25 3.25C5 20.25 7 20.5 9 21.25Z");
}
</style><path class="j7hu_dbwz"/>`,
		"fallback": "iconoven:scythe",
	});
}

export default Component;
