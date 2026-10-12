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
		"content": `<style>.hm4h27vqv {
  d: path("M10.5 20.85V11.4q0-.4.28-.68l.69-.69q.28-.28.53.03l.5.63q.25.31.62.15l1.01-.43q.37-.16.37.24v10.2q0 .4-.4.4h-3.2q-.4 0-.4-.4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p2ctueais {
  d: path("M3.15 2.75h9.45q.4 0 .15.31l-.5.63q-.25.31.03.59l.69.69q.28.28-.12.28h-9.7q-.4 0-.4-.4v-1.7q0-.4.4-.4");
}

.wekpwbc8n {
  width: 4.5px;
  height: 16px;
  x: 3.5px;
  y: 5.25px;
  rx: 0.5px;
}

.xfw0sjkjf {
  width: 4px;
  height: 4px;
  x: 17.25px;
  y: 17.25px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><path class="p2ctueais"/><rect class="wekpwbc8n"/><path class="hm4h27vqv"/><rect class="xfw0sjkjf"/></g>`,
		"fallback": "iconoven:ruins",
	});
}

export default Component;
