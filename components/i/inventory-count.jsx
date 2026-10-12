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

.vijr9ibmd {
  width: 15.5px;
  height: 17.5px;
  x: 4.25px;
  y: 3.75px;
  rx: 1.5px;
}

.xd-vp3ztb {
  d: path("M9 3.75v3h6v-3M9 10v7.5m3-7.5v7.5m3-7.5v7.5m-8-1.75l10-4.5");
}
</style><g class="hntgybcog"><rect class="vijr9ibmd"/><path class="xd-vp3ztb"/></g>`,
		"fallback": "iconoven:inventory-count",
	});
}

export default Component;
