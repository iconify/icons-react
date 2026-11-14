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

.wr-y3mbib {
  d: path("M9.5 19a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M4 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m11 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.xeqybebqi {
  d: path("M12 16.5v-2c0-3-5.5-3-5.5-6v-1m5.5 7c0-3 5.5-3 5.5-6v-1");
}
</style><g class="hntgybcog"><path class="xeqybebqi"/><path class="wr-y3mbib"/></g>`,
		"fallback": "uix:route-alt",
	});
}

export default Component;
