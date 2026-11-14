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

.nj-tuutca {
  d: path("m7.25 18.75l8-9.5c1.5-1.75.25-4.25-2-4.25c-.5 0-1 .25-1.25.5c-.25-.25-.75-.5-1.25-.5c-2.25 0-3.5 2.5-2 4.25l8 9.5");
}

.wf95gwefd {
  d: path("M12 5.5c-2-1.75-5.5-2-7.5.5s-2 7-.5 9.75c1 1.85 2.5 2.75 3.25 3M12 5.5c2-1.75 5.5-2 7.5.5s2 7 .5 9.75c-1 1.85-2.5 2.75-3.25 3m-11-8.25h.01m12.49 0h.01");
}
</style><g class="hntgybcog"><path class="nj-tuutca"/><path class="wf95gwefd"/></g>`,
		"fallback": "uix:pretzel-soft",
	});
}

export default Component;
