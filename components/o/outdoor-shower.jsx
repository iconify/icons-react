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

.l62zclblf {
  d: path("M6 21V6a2.5 2.5 0 0 1 2.5-2.5H11a2 2 0 0 1 2 2");
}

.u61k-xbtj {
  d: path("M10 8.5a3 3 0 0 1 6 0ZM3 21h6m2-9h.01M15 12h.01M13 15h.01M12 21h9");
}
</style><g class="hntgybcog"><path class="l62zclblf"/><path class="u61k-xbtj"/></g>`,
		"fallback": "uix:outdoor-shower",
	});
}

export default Component;
