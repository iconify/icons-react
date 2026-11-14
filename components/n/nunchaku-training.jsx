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
		"content": `<style>.dri233bjf {
  d: path("M5.5 7.5c0-4.5 6-5.5 6.75-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ipks2wbml {
  d: path("M5.5 7.5za2 2 0 0 1 2 2v9a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2m6.75-1.629za2 2 0 0 1 2.732.732l4.5 7.794a2 2 0 0 1-.732 2.732a2 2 0 0 1-2.732-.732l-4.5-7.794a2 2 0 0 1 .732-2.732");
}
</style><g class="hntgybcog"><path class="ipks2wbml"/><path class="dri233bjf"/></g>`,
		"fallback": "uix:nunchaku-training",
	});
}

export default Component;
