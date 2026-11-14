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
		"content": `<style>.d5cgy1yrk {
  d: path("M18.25 5.75a8.75 8.75 0 1 1-12.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z23batbmz {
  d: path("M2.75 5.75h3v3M12 17V9.5m0 3Q12 9 15.5 9q0 3.5-3.5 3.5M9 17h6");
}
</style><g class="hntgybcog"><path class="d5cgy1yrk"/><path class="z23batbmz"/></g>`,
		"fallback": "uix:nitrogen-cycle",
	});
}

export default Component;
