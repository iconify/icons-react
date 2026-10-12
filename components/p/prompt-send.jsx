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
		"content": `<style>.c_tqagbnx {
  d: path("M6.25 12h2");
}

.gyks0cbsy {
  d: path("M17.75 13.75V11m-1 1l1-1l1 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ti2lvsb6o {
  cx: 17.75px;
  cy: 12px;
  r: 3.5px;
}

.ydio1zd7h {
  width: 9px;
  height: 8px;
  x: 2.75px;
  y: 8px;
  rx: 4px;
}
</style><g class="hntgybcog"><rect class="ydio1zd7h"/><path class="c_tqagbnx"/><circle class="ti2lvsb6o"/><path class="gyks0cbsy"/></g>`,
		"fallback": "iconoven:prompt-send",
	});
}

export default Component;
