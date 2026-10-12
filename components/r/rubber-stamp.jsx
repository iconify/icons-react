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
		"content": `<style>.evfw90e9e {
  width: 8.5px;
  height: 3px;
  x: 7.75px;
  y: 2.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lguiyqoyb {
  width: 10.5px;
  height: 7.5px;
  x: 6.75px;
  y: 8px;
  rx: 1.5px;
}

.nx0zbqn7m {
  d: path("M7.75 4.25h-4v14m12.5-14h4v14");
}

.rmxoesa2q {
  d: path("M9.5 11.75h5m-2.5-6V8");
}

.s20769bun {
  width: 12.5px;
  height: 3.5px;
  x: 5.75px;
  y: 17.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="evfw90e9e"/><path class="nx0zbqn7m"/><rect class="lguiyqoyb"/><path class="rmxoesa2q"/><rect class="s20769bun"/></g>`,
		"fallback": "iconoven:rubber-stamp",
	});
}

export default Component;
