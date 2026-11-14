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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ibrh2hjxa {
  d: path("M8.25 12.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m9.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-8.5 1v1.25m9.5-1.25v1.25");
}

.nsrra1bft {
  d: path("M4.25 2.5h6A1.75 1.75 0 0 1 12 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75h-6a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 4.25 2.5m9.5 0h6a1.75 1.75 0 0 1 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75h-6A1.75 1.75 0 0 1 12 19.75V4.25a1.75 1.75 0 0 1 1.75-1.75M5 5.5h4.5M5 8h4.5m5-2.5H19M14.5 8H19");
}
</style><g class="hntgybcog"><path class="nsrra1bft"/><path class="ibrh2hjxa"/></g>`,
		"fallback": "uix:staff-locker",
	});
}

export default Component;
