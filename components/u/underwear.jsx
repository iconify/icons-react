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

.qkfutpbeu {
  width: 17.5px;
  height: 3.5px;
  x: 3.25px;
  y: 4.5px;
  rx: 1.25px;
}

.vunhaob3t {
  d: path("M3.25 8h17.5v2.25C17 10.75 14.5 14 14 19.5h-4c-.5-5.5-3-8.75-6.75-9.25Z");
}
</style><g class="hntgybcog"><rect class="qkfutpbeu"/><path class="vunhaob3t"/></g>`,
		"fallback": "iconoven:underwear",
	});
}

export default Component;
