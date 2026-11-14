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

.rlcx1jh5a {
  d: path("M10 12a2 5.25 0 1 0 4 0a2 5.25 0 1 0-4 0m7.592-7.987a9.75 9.75 0 0 1 3.826 5.464m-15.01 10.51a9.75 9.75 0 0 1-3.826-5.464");
}

.ya86gqukk {
  d: path("M7.5 12a4.5 8.5 0 1 0 9 0a4.5 8.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="ya86gqukk"/><path class="rlcx1jh5a"/></g>`,
		"fallback": "uix:probability",
	});
}

export default Component;
