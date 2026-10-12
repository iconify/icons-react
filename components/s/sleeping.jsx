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

.kz85adcdz {
  d: path("M16 2.75h4l-4 4h4");
}

.u5pl82bll {
  cx: 10.5px;
  cy: 17px;
  r: 1px;
}

.x9i9b9bhm {
  d: path("M7 12.75c.65.55 1.6.55 2.25 0m2.5 0c.65.55 1.6.55 2.25 0");
}

.xh4evtb-j {
  cx: 10.5px;
  cy: 13.5px;
  r: 7.75px;
}
</style><g class="hntgybcog"><circle class="xh4evtb-j"/><path class="x9i9b9bhm"/><circle class="u5pl82bll"/><path class="kz85adcdz"/></g>`,
		"fallback": "iconoven:sleeping",
	});
}

export default Component;
