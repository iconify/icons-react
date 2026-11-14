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

.i04io93ly {
  d: path("M13.5 2.5V8H19M8.5 12h7m-7 4H13");
}

.uyrvd-b2p {
  d: path("M7 2.5h6.5L19 8v11.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="uyrvd-b2p"/><path class="i04io93ly"/></g>`,
		"fallback": "uix:match-report",
	});
}

export default Component;
