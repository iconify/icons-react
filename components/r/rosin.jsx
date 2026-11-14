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
		"content": `<style>.f2ug0gurz {
  d: path("m4.5 15.5l2-2l3 3l-2 2Zm5 1l11-11m-1.789 9.633l1.75.942a1.5 1.5 0 0 1 .789 1.321v1.958a1.5 1.5 0 0 1-.789 1.321l-1.75.942a1.5 1.5 0 0 1-1.422 0l-1.75-.942a1.5 1.5 0 0 1-.789-1.321v-1.958a1.5 1.5 0 0 1 .789-1.321l1.75-.942a1.5 1.5 0 0 1 1.422 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qadduvbcb {
  d: path("m2.5 17.5l15-15l3 3");
}

.yvf3_7ucp {
  d: path("M14.75 16.5L18 18.25l3.25-1.75M18 18.25V22");
}
</style><g class="hntgybcog"><path class="qadduvbcb"/><path class="f2ug0gurz"/><path class="yvf3_7ucp"/></g>`,
		"fallback": "uix:rosin",
	});
}

export default Component;
