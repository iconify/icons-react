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

.pmg0w7bnn {
  d: path("M8 10H3.75a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1H8m8-4h4.25a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H16m-6 2.75v3.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3.5");
}

.wjsu1vbnz {
  width: 8px;
  height: 9.25px;
  x: 8px;
  y: 7.5px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="pmg0w7bnn"/><rect class="wjsu1vbnz"/></g>`,
		"fallback": "iconoven:plumbing-pipe",
	});
}

export default Component;
