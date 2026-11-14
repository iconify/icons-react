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
		"content": `<style>.g2orv-g1q {
  d: path("M14.5 5.5H17A1.5 1.5 0 0 1 18.5 7v2.5A1.5 1.5 0 0 1 17 11h-2.5A1.5 1.5 0 0 1 13 9.5V7a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m_4a1mbih {
  d: path("M14.5 3H17a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 17 21h-2.5a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 14.5 3m-10 5H9a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2a2 2 0 0 1 2-2");
}

.v6frtlvmc {
  d: path("M13.75 10c.75-3 2.25-3.25 4 0M3.5 15.5h5M7 14l1.5 1.5L7 17");
}
</style><g class="hntgybcog"><path class="m_4a1mbih"/><path class="g2orv-g1q"/><path class="v6frtlvmc"/></g>`,
		"fallback": "uix:spirometer",
	});
}

export default Component;
