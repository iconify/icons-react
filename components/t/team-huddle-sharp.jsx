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
		"content": `<style>.txgv_3gqf {
  d: path("M7 20.25h10.75v-.75c0-2.7-2.6-4.75-5.75-4.75S6.25 16.8 6.25 19.5v.75zM6 6.5A2.25 2.25 0 0 0 6 11m12-4.5a2.25 2.25 0 0 1 0 4.5M4.75 14.25l-2 .667v4.333H4.5m14.75-5l2 .667v4.333H19.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z2o0ujiuj {
  cx: 12px;
  cy: 7px;
  r: 3px;
}
</style><g class="x2cwu0gfd"><circle class="z2o0ujiuj"/><path class="txgv_3gqf"/></g>`,
		"fallback": "iconoven:team-huddle-sharp",
	});
}

export default Component;
