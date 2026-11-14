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

.qwi8y1b-o {
  d: path("M9 12a6.25 6.25 0 1 0 12.5 0A6.25 6.25 0 1 0 9 12m-3.5 0h.01M12 12h.01m6.49 0h.01");
}

.tfd7ezb_w {
  d: path("M2.5 12A6.25 6.25 0 1 0 15 12a6.25 6.25 0 1 0-12.5 0");
}
</style><g class="hntgybcog"><path class="tfd7ezb_w"/><path class="qwi8y1b-o"/></g>`,
		"fallback": "uix:join-full",
	});
}

export default Component;
