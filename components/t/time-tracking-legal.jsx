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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n2b0o1b-a {
  d: path("M5 3.5h4.2m5.6 0H19m-14 0L2.5 9a2.5 2.5 0 0 0 5 0Zm14 0L16.5 9a2.5 2.5 0 0 0 5 0Zm-7 0V20m-3.5 0h7m-.75-2a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="n2b0o1b-a"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:time-tracking-legal",
	});
}

export default Component;
