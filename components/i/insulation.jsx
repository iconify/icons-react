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

.r0_5aovcn {
  width: 3.5px;
  height: 18.5px;
  x: 17.75px;
  y: 2.75px;
  rx: 1.25px;
}

.up0o3bbej {
  width: 3.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 1.25px;
}

.zz4t7_t2p {
  d: path("m9.5 3.5l5 3l-5 3l5 3l-5 3l5 3l-5 2.25");
}
</style><g class="hntgybcog"><rect class="up0o3bbej"/><rect class="r0_5aovcn"/><path class="zz4t7_t2p"/></g>`,
		"fallback": "iconoven:insulation",
	});
}

export default Component;
