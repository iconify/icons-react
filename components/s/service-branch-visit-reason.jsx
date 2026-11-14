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

.mq608-1pz {
  d: path("M10.25 9.25c0-1.25.75-2 1.75-2S13.75 8 13.75 9c0 1.5-1.75 1.75-1.75 3.25m0 3.25h.01");
}

.q5u692bhg {
  d: path("M3 4.5h18V10a2 2 0 0 0 0 4v5.5H3V14a2 2 0 0 0 0-4Z");
}
</style><g class="hntgybcog"><path class="q5u692bhg"/><path class="mq608-1pz"/></g>`,
		"fallback": "uix:service-branch-visit-reason",
	});
}

export default Component;
