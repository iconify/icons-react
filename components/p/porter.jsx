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
		"content": `<style>.hdacnf11p {
  d: path("M16.5 13.75V17h3.25l1.5 3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rvz9eleor {
  d: path("M11.572 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.155 0 2.236.166 3.198.473M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m7.75 12.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="rvz9eleor"/><path class="hdacnf11p"/></g>`,
		"fallback": "uix:porter",
	});
}

export default Component;
