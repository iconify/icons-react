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

.lu9lmfekq {
  d: path("m6.25 16.25l1-.6M5 11h1.25M7.5 6.25l.75 1M12 4.75V6m4.77 1.23A6.75 6.75 0 0 1 18.75 12M12 12L8.75 8.75");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="lu9lmfekq"/></g>`,
		"fallback": "iconoven:tachometer",
	});
}

export default Component;
