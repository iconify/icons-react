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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6a05acrm {
  cx: 13.5px;
  cy: 14px;
  r: 1.5px;
}

.k-uix-ndb {
  d: path("M7.75 10c.75.75 2 .75 2.75 0m3 0c.75.75 2 .75 2.75 0m-6.5 8l3-.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="k-uix-ndb"/><circle class="i6a05acrm"/></g>`,
		"fallback": "iconoven:sleepy",
	});
}

export default Component;
