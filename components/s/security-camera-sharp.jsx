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
		"content": `<style>.da7clwbqd {
  d: path("M3.75 5.75h16.5m-15.5 3.5h14.5v2.5a7.25 7.25 0 0 1-14.5 0Z");
}

.t-z7r0bos {
  cx: 12px;
  cy: 14.25px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="da7clwbqd"/><circle class="t-z7r0bos"/></g>`,
		"fallback": "iconoven:security-camera-sharp",
	});
}

export default Component;
