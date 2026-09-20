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
		"content": `<style>.d_scobift {
  d: path("M3 18h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jyd5g773m {
  d: path("M3 13h12");
}

.u-x8-1cug {
  d: path("M17 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.vhnbtvbtn {
  d: path("M3 8h18");
}
</style><g class="hntgybcog"><path class="vhnbtvbtn"/><path class="jyd5g773m"/><path class="d_scobift"/><path class="u-x8-1cug"/></g>`,
		"fallback": "iconmind:relevance-score-outline-thin",
	});
}

export default Component;
