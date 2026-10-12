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
		"content": `<style>.bdgi1bc0w {
  width: 4px;
  height: 5.5px;
  x: 10px;
  y: 2.75px;
  rx: 1.5px;
}

.exxs1iber {
  width: 6px;
  height: 9.5px;
  x: 9px;
  y: 11.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.litan7nae {
  d: path("M10 5.5h4m-2 3.75v2.25");
}

.vfvbu2x8k {
  d: path("M9 14.75h6");
}
</style><g class="hntgybcog"><rect class="bdgi1bc0w"/><path class="litan7nae"/><rect class="exxs1iber"/><path class="vfvbu2x8k"/></g>`,
		"fallback": "iconoven:mascara",
	});
}

export default Component;
