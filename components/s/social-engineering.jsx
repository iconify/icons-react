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

.mzgs10xpk {
  d: path("M2.75 21.25a5.5 5.5 0 0 1 11 0Zm16.5-18.5v9.5a2.25 2.25 0 0 1-4.5 0V11");
}

.pfv654-ms {
  cx: 8.25px;
  cy: 9px;
  r: 3.25px;
}
</style><g class="hntgybcog"><circle class="pfv654-ms"/><path class="mzgs10xpk"/></g>`,
		"fallback": "iconoven:social-engineering",
	});
}

export default Component;
