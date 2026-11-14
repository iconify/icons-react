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
		"content": `<style>.stdrkgqby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18V5l-6.5 6v2.5h-5V11L3 5ZM6.5 8h11M12 16.5s-2.5 2-2.5 3a2.5 2.5 0 0 0 5 0c0-1-2.5-3-2.5-3");
}
</style><path class="stdrkgqby"/>`,
		"fallback": "uix:water-filter-plant",
	});
}

export default Component;
