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
		"content": `<style>.enbtdobjz {
  cx: 6.5px;
  cy: 12px;
  r: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lf940mbnz {
  cx: 12px;
  cy: 12px;
  r: 1.25px;
}

.nnvh2smpt {
  d: path("M3.75 4.5h16.5M3.75 8.25h10m-10 7.5h16.5M3.75 19.5h10");
}

.wj-8yfbln {
  cx: 17.5px;
  cy: 12px;
  r: 1.25px;
}
</style><g class="hntgybcog"><path class="nnvh2smpt"/><circle class="enbtdobjz"/><circle class="lf940mbnz"/><circle class="wj-8yfbln"/></g>`,
		"fallback": "iconoven:section-break",
	});
}

export default Component;
