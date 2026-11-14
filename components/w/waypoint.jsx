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
		"content": `<style>.ot4uvhuas {
  d: path("M15.5 16.5s-5.5-5-5.5-8a5.5 5.5 0 0 1 11 0c0 3-5.5 8-5.5 8ZM3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.uefslbczy {
  d: path("M13.5 8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM7 19h6q2.5 0 2.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ot4uvhuas"/><path class="uefslbczy"/></g>`,
		"fallback": "uix-sharp:waypoint",
	});
}

export default Component;
