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

.i_ojjmb9k {
  d: path("M12 12.75c0-2-1.5-3-3.25-3c0 2 1.5 3 3.25 3m0 0c0-2 1.5-3 3.25-3c0 2-1.5 3-3.25 3");
}

.ybxigg3gg {
  d: path("M7 7h10c1 1 1.5 2.5 1.5 4v7a2.5 2.5 0 0 1-2.5 2.5H8A2.5 2.5 0 0 1 5.5 18v-7c0-1.5.5-3 1.5-4m-.5-3.5h11M12 17.75v-5");
}
</style><g class="hntgybcog"><path class="ybxigg3gg"/><path class="i_ojjmb9k"/></g>`,
		"fallback": "uix:sprouts-jar",
	});
}

export default Component;
