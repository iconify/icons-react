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
		"content": `<style>.bq-q5-zjd {
  d: path("M12 6za1.25 1.25 0 0 1 1.25 1.25v5A1.25 1.25 0 0 1 12 13.5a1.25 1.25 0 0 1-1.25-1.25v-5A1.25 1.25 0 0 1 12 6m-1.25 10.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="bq-q5-zjd"/></g>`,
		"fallback": "uix:status-at-risk",
	});
}

export default Component;
