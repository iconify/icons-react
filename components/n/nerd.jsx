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
		"content": `<style>.a9umj-bxo {
  d: path("M11 10.25h2M8.5 14.5h7m-4.75 0V17h2.5v-2.5");
}

.bu75h2b-b {
  cx: 15.25px;
  cy: 10.25px;
  r: 2.25px;
}

.dbgvcxwad {
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

.kb86c-bek {
  cx: 8.75px;
  cy: 10.25px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><circle class="kb86c-bek"/><circle class="bu75h2b-b"/><path class="a9umj-bxo"/></g>`,
		"fallback": "iconoven:nerd",
	});
}

export default Component;
