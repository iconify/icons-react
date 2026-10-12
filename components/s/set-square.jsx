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
		"content": `<style>.fk285acbr {
  d: path("M7.25 12.5V16q0 .75.75.75h3.5q.75 0 .22-.53l-3.94-3.94q-.53-.53-.53.22");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8f78achv {
  d: path("M3.75 4.75v14q0 1.5 1.5 1.5h14q1.5 0 .44-1.06L4.81 4.31q-1.06-1.06-1.06.44");
}
</style><g class="hntgybcog"><path class="w8f78achv"/><path class="fk285acbr"/></g>`,
		"fallback": "iconoven:set-square",
	});
}

export default Component;
