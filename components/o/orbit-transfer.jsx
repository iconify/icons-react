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
		"content": `<style>.cq61gq66i {
  d: path("M16.5 12a4.5 4.5 0 1 0-7.68 3.18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.peiq2hfxm {
  cx: 12px;
  cy: 12px;
  r: 1.75px;
}

.w526dfbhz {
  d: path("M3.31 8.84a9.25 9.25 0 0 1 17.38 0M16.5 12a6.875 6.45 0 0 1-13.75 0");
}
</style><g class="hntgybcog"><circle class="peiq2hfxm"/><path class="cq61gq66i"/><path class="w526dfbhz"/></g>`,
		"fallback": "iconoven:orbit-transfer",
	});
}

export default Component;
