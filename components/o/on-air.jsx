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

.m1is5jemp {
  cx: 7.75px;
  cy: 12px;
  r: 2px;
}

.r3_1npb-l {
  width: 18.5px;
  height: 9px;
  x: 2.75px;
  y: 7.5px;
  rx: 2.5px;
}

.z0qge-b2w {
  d: path("M12.25 12h5.5");
}
</style><g class="hntgybcog"><rect class="r3_1npb-l"/><circle class="m1is5jemp"/><path class="z0qge-b2w"/></g>`,
		"fallback": "iconoven:on-air",
	});
}

export default Component;
