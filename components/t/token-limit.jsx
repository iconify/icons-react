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

.hzb3j89ql {
  fill: currentColor;
  d: path("M7.5 10.75H16A1.25 1.25 0 0 1 17.25 12A1.25 1.25 0 0 1 16 13.25H7.5A1.25 1.25 0 0 1 6.25 12a1.25 1.25 0 0 1 1.25-1.25");
}

.wu7lmw6mt {
  d: path("M20 8H6a2.5 2.5 0 0 0-2.5 2.5v3A2.5 2.5 0 0 0 6 16h14m0-11.5v15");
}
</style><g class="hntgybcog"><path class="wu7lmw6mt"/><path class="hzb3j89ql"/></g>`,
		"fallback": "uix:token-limit",
	});
}

export default Component;
