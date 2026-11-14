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
		"content": `<style>.aywr_g0kk {
  d: path("M14.5 16.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8.5 0h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rsudimb0g {
  d: path("M6 11.5h12a3.5 3.5 0 0 1 3.5 3.5v2.5A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5V15A3.5 3.5 0 0 1 6 11.5m.75-5a7 7 0 0 1 10.5 0m-8 2a3.75 3.75 0 0 1 5.5 0");
}
</style><g class="hntgybcog"><path class="rsudimb0g"/><path class="aywr_g0kk"/></g>`,
		"fallback": "uix:sports-radio",
	});
}

export default Component;
