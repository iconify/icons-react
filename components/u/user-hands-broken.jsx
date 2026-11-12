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
		"content": `<style>.dtl23o_xq {
  cx: 12px;
  cy: 6px;
  r: 4px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sy8ty467i {
  d: path("M8 13H16C17.7107 13 19.1506 14.2804 19.3505 15.9795L20 21.5M8 13C6.28928 13 4.84936 14.2804 4.64948 15.9795L4 21.5M8 13V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V17");
}
</style><g class="ipq1z-bjh"><path class="sy8ty467i"/><circle class="dtl23o_xq"/></g>`,
		"fallback": "solar:user-hands-broken",
	});
}

export default Component;
