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

.kb84ovoqh {
  d: path("M2.5 10.5v3a9.5 5 0 0 0 19 0v-3M9 10h.01M14 9h.01m-1.51 3h.01");
}

.qessq5byk {
  d: path("M2.5 10.5a9.5 5 0 1 0 19 0a9.5 5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="qessq5byk"/><path class="kb84ovoqh"/></g>`,
		"fallback": "uix:petri-dish",
	});
}

export default Component;
