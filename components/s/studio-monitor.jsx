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
		"content": `<style>.c56lwnbsh {
  cx: 12px;
  cy: 13.25px;
  r: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hz4fdebup {
  d: path("M12 18.5v2.75m-4 0h8");
}

.ioslhmxdl {
  width: 4.5px;
  height: 2.5px;
  x: 9.75px;
  y: 5.25px;
  rx: 1px;
}

.rwhm97h2q {
  width: 13.5px;
  height: 15.75px;
  x: 5.25px;
  y: 2.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="rwhm97h2q"/><rect class="ioslhmxdl"/><circle class="c56lwnbsh"/><path class="hz4fdebup"/></g>`,
		"fallback": "iconoven:studio-monitor",
	});
}

export default Component;
