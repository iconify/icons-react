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
		"content": `<style>.p-1h55b8k {
  d: path("M2.75 9.25h18.5M4.5 7v4.5m15-4.5v4.5m-7.25-.75L7.5 14.5h7l-1.75 6.75h4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z13ah3brv {
  cx: 13px;
  cy: 4.5px;
  r: 1.75px;
}
</style><g class="x2cwu0gfd"><circle class="z13ah3brv"/><path class="p-1h55b8k"/></g>`,
		"fallback": "iconoven:squat-sharp",
	});
}

export default Component;
