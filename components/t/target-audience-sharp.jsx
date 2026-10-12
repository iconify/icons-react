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

.g86nzmbyn {
  d: path("M9 16.5h6.75v-.75c0-1.1-1.68-1.75-3.75-1.75s-3.75.65-3.75 1.75v.75z");
}

.m5xi857vv {
  cx: 12px;
  cy: 9.25px;
  r: 1.75px;
}

.ufig3ytqf {
  d: path("M12 2.75V4.5m0 16.75V19.5M2.75 12H4.5m16.75 0H19.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="ufig3ytqf"/><circle class="m5xi857vv"/><path class="g86nzmbyn"/></g>`,
		"fallback": "iconoven:target-audience-sharp",
	});
}

export default Component;
