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
		"content": `<style>.h9-9m_5qp {
  d: path("M7.5 9a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m-3 12.5c0-3.5 3.25-5.25 7.5-5.25s7.5 1.75 7.5 5.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tpy_pac9m {
  d: path("M7.5 9q3.5 0 7-3.75");
}
</style><g class="hntgybcog"><path class="h9-9m_5qp"/><path class="tpy_pac9m"/></g>`,
		"fallback": "uix:person-short-hair",
	});
}

export default Component;
