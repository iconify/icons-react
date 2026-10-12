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

.ot5zf0n8j {
  d: path("M3.75 5.75h12.5m-12.5 5h7.5m-7.5 5h5");
}

.qwu_fxl2y {
  cx: 16.5px;
  cy: 16.5px;
  r: 4.75px;
}

.w6y7px0ms {
  d: path("M16.5 14.25v2.25l1.5 1.25");
}
</style><g class="hntgybcog"><path class="ot5zf0n8j"/><circle class="qwu_fxl2y"/><path class="w6y7px0ms"/></g>`,
		"fallback": "iconoven:watch-later",
	});
}

export default Component;
