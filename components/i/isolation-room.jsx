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
		"content": `<style>.dmwrntbgf {
  width: 18.5px;
  height: 18px;
  x: 2.75px;
  y: 3.25px;
  rx: 2.5px;
}

.gwrwmibay {
  d: path("M7.75 18.25a4.25 4.25 0 0 1 8.5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nybxqgb1e {
  d: path("M5.75 6.25v12m12.5-12v12");
}

.zls1_oujj {
  cx: 12px;
  cy: 9px;
  r: 2.5px;
}
</style><g class="hntgybcog"><rect class="dmwrntbgf"/><path class="nybxqgb1e"/><circle class="zls1_oujj"/><path class="gwrwmibay"/></g>`,
		"fallback": "iconoven:isolation-room",
	});
}

export default Component;
