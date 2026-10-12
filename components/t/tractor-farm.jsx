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

.jmha67xuh {
  d: path("M17.75 3.75V10H13m-3 0V6.75M7.5 9.5l-3 3.25m-1.75 0h3.5V15a1.5 1.5 0 0 1-1.5 1.5h-2Z");
}

.k4xnl580k {
  cx: 16.75px;
  cy: 17.25px;
  r: 4px;
}

.s9km39c5l {
  d: path("M20.25 13.25v-8.5a1 1 0 0 0-1-1h-5a1 1 0 0 0-.97.76L12 10H8a1 1 0 0 0-1 1v2.25Z");
}

.v66ayjblm {
  cx: 9px;
  cy: 19px;
  r: 2.25px;
}
</style><g class="hntgybcog"><path class="s9km39c5l"/><path class="jmha67xuh"/><circle class="k4xnl580k"/><circle class="v66ayjblm"/></g>`,
		"fallback": "iconoven:tractor-farm",
	});
}

export default Component;
