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

.p8ypvob7c {
  d: path("M5.75 10.5v3q0 .75.56.25l1.38-1.25q.56-.5 0-1l-1.38-1.25q-.56-.5-.56.25m12.5 0v3q0 .75-.56.25l-1.38-1.25q-.56-.5 0-1l1.38-1.25q.56-.5.56.25M12 8.5v7");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="p8ypvob7c"/></g>`,
		"fallback": "iconoven:max-width",
	});
}

export default Component;
