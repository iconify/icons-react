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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k628-abaf {
  fill: currentColor;
  d: path("M3 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lh7nxd5dq {
  d: path("M3 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.qnct04-1y {
  d: path("M11 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.t1kklrbbj {
  fill: currentColor;
  d: path("M11 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="k628-abaf"/><path class="t1kklrbbj"/><path class="lh7nxd5dq"/><path class="qnct04-1y"/></g>`,
		"fallback": "iconmind:record-link-duotone-thin",
	});
}

export default Component;
