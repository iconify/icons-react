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

.l1mthztqi {
  d: path("m12.98 4.99l7.29 13.02q.98 1.74-1.02 1.74H4.75q-2 0-1.02-1.74l7.29-13.02q.98-1.74 1.96 0");
}

.pt2ll5v9b {
  d: path("M13 18.25v-8.5m-3.75 8.5c0-2.5 3.75-3.5 3.75-6");
}
</style><g class="hntgybcog"><path class="l1mthztqi"/><path class="pt2ll5v9b"/></g>`,
		"fallback": "iconoven:lane-merge",
	});
}

export default Component;
