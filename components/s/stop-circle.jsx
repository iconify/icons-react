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

.p27dfseqo {
  width: 6px;
  height: 6px;
  x: 9px;
  y: 9px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><rect class="p27dfseqo"/></g>`,
		"fallback": "iconoven:stop-circle",
	});
}

export default Component;
