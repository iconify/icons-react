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
		"content": `<style>.cetklsjxm {
  d: path("M5.25 21.25v-18m0 .5h13.5l-2.5 4l2.5 4H5.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-rqkpu3s {
  cx: 10.75px;
  cy: 7.75px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="cetklsjxm"/><circle class="z-rqkpu3s"/></g>`,
		"fallback": "iconoven:mission-flag",
	});
}

export default Component;
