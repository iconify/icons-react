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
		"content": `<style>.fkzbbowvf {
  d: path("M7 3.5h10A3.5 3.5 0 0 1 20.5 7v4a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 11V7A3.5 3.5 0 0 1 7 3.5m5 11V18m-5 3h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s2o1_jbxy {
  d: path("M6 9h2l1.25-2.25l1.75 4.5L12 9m3-2h3m-3 4h3");
}
</style><g class="hntgybcog"><path class="fkzbbowvf"/><path class="s2o1_jbxy"/></g>`,
		"fallback": "uix:patient-monitor",
	});
}

export default Component;
