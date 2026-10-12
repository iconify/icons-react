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
		"content": `<style>.c6grrkemi {
  cx: 17px;
  cy: 18.75px;
  r: 2px;
}

.gqqa04rsw {
  d: path("M3.75 13.75h16.5a1 1 0 0 0 1-1v-1a1.5 1.5 0 0 0-1.5-1.5h-3L14.6 5.6a1.25 1.25 0 0 0-1.2-.85H8.5a2 2 0 0 0-2 2v3.5H4.25a1.5 1.5 0 0 0-1.5 1.5v1a1 1 0 0 0 1 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.upgh8uo8y {
  cx: 7px;
  cy: 18.75px;
  r: 2px;
}

.w4j14abrx {
  d: path("M10 7.75h1.75q.5 0 .71.45l.63 1.35q.21.45-.29.45H10q-.5 0-.5-.5V8.25q0-.5.5-.5");
}
</style><g class="hntgybcog"><path class="gqqa04rsw"/><path class="w4j14abrx"/><circle class="upgh8uo8y"/><circle class="c6grrkemi"/></g>`,
		"fallback": "iconoven:toy-car",
	});
}

export default Component;
