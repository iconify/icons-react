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
		"content": `<style>.p3h7tk4zh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.12 3.434l3.517 2.93a1.75 1.75 0 0 1 .208 2.483l-3.516 4.103a1.75 1.75 0 0 1-2.658 0L7.155 8.847a1.75 1.75 0 0 1 .208-2.483l3.517-2.93a1.75 1.75 0 0 1 2.24 0M12 2.5v12m-6-7h12m-6 7q0 5 5 6.5m-5.25-2.5l2-1.25m.75 4l1.25-2");
}
</style><path class="p3h7tk4zh"/>`,
		"fallback": "uix:kite",
	});
}

export default Component;
