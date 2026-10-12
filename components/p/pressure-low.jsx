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

.jcc6tdbyh {
  d: path("M9.5 7.75v8.5H15");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="jcc6tdbyh"/></g>`,
		"fallback": "iconoven:pressure-low",
	});
}

export default Component;
