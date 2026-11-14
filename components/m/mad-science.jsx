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
		"content": `<style>.r55i1s2sp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 10.5V13L4 21.5h16L14.5 13v-2.5m-4.5-4a2 2 0 1 0 4 0a2 2 0 1 0-4 0M15.5 3h.01M8 3.5h.01m-.76 13h9.5");
}
</style><path class="r55i1s2sp"/>`,
		"fallback": "uix:mad-science",
	});
}

export default Component;
