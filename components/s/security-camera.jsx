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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t-z7r0bos {
  cx: 12px;
  cy: 14.25px;
  r: 2.25px;
}
</style><g class="hntgybcog"><path class="da7clwbqd"/><circle class="t-z7r0bos"/></g>`,
		"fallback": "iconoven:security-camera",
	});
}

export default Component;
