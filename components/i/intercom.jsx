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

.hun6gud1w {
  d: path("M9 6.75h6m-6 2.5h6m-6 2.5h6");
}

.km8emob2x {
  cx: 12px;
  cy: 16.25px;
  r: 1.75px;
}

.upddb4dxn {
  width: 13.5px;
  height: 18.5px;
  x: 5.25px;
  y: 2.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="upddb4dxn"/><path class="hun6gud1w"/><circle class="km8emob2x"/></g>`,
		"fallback": "iconoven:intercom",
	});
}

export default Component;
