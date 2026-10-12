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
		"content": `<style>.cn7l77bpv {
  d: path("M13.13 6.52c-.21-.45-.62-.75-1.12-.75c-.67 0-1.17.39-1.17.86c0 1.22 2.34.61 2.34 1.78c0 .49-.5.83-1.17.83c-.52 0-.96-.28-1.14-.73");
}

.h9iv7nbwx {
  d: path("M8.75 16.25h6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lb_5ccc9w {
  cx: 12px;
  cy: 7.5px;
  r: 4px;
}

.qcl45yb5w {
  width: 16.5px;
  height: 9.75px;
  x: 3.75px;
  y: 11.5px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="qcl45yb5w"/><path class="h9iv7nbwx"/><circle class="lb_5ccc9w"/><path class="cn7l77bpv"/></g>`,
		"fallback": "iconoven:savings-goal",
	});
}

export default Component;
