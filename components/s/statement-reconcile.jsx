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

.njngw6byh {
  d: path("M8.875 2.5h6.25A4.375 4.375 0 0 1 19.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125V6.875A4.375 4.375 0 0 1 8.875 2.5M7.5 7h4");
}

.t4hfs9bot {
  d: path("M13.75 7L15 8.25l2-2.5M7.5 12h4m2.25 0L15 13.25l2-2.5M7.5 17h4m2.25 0L15 18.25l2-2.5");
}
</style><g class="hntgybcog"><path class="njngw6byh"/><path class="t4hfs9bot"/></g>`,
		"fallback": "uix:statement-reconcile",
	});
}

export default Component;
