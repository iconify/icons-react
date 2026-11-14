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

.jzowre_ua {
  d: path("M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M6 9h12");
}

.sbveh4avj {
  d: path("M10.25 15.75h3.5A1.25 1.25 0 0 1 15 17a1.25 1.25 0 0 1-1.25 1.25h-3.5A1.25 1.25 0 0 1 9 17a1.25 1.25 0 0 1 1.25-1.25");
}
</style><g class="hntgybcog"><path class="jzowre_ua"/><path class="sbveh4avj"/></g>`,
		"fallback": "uix:magnetic-stirrer",
	});
}

export default Component;
