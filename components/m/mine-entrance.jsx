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

.m_uc3fb9e {
  d: path("M6.5 17.5V11a5.5 5.5 0 0 1 11 0v6.5m-9.5 4l2.25-7.5M16 21.5L13.75 14");
}

.sge8t85_o {
  d: path("M6.5 17.5h-4v-13a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v13h-4");
}
</style><g class="hntgybcog"><path class="sge8t85_o"/><path class="m_uc3fb9e"/></g>`,
		"fallback": "uix:mine-entrance",
	});
}

export default Component;
