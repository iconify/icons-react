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
		"content": `<style>.ambww9odz {
  d: path("M7.5 18.75c.75 1 2.25 1.75 4.25 1.75c2.5 0 4-1.25 4-3c0-4-8.75-3.5-8.75-8c0-1.25.75-2.25 2-2.75");
}

.fio6axbck {
  d: path("M16.5 5.25c-.75-1-2.25-1.75-4.25-1.75c-2.5 0-4 1.25-4 3c0 4 8.75 3.5 8.75 8c0 1.25-.75 2.25-2 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fio6axbck"/><path class="ambww9odz"/></g>`,
		"fallback": "iconoven:section-sign",
	});
}

export default Component;
