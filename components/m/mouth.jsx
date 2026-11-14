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
		"content": `<style>.gkol7ubwa {
  d: path("M2.5 12c4.5 1 14.5 1 19 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mb4qw-buy {
  d: path("M2.5 12C5 8.5 8 7 10.25 7.75L12 8.5l1.75-.75C16 7 19 8.5 21.5 12c-2.5 3.75-6 5.5-9.5 5.5S5 15.75 2.5 12");
}
</style><g class="hntgybcog"><path class="mb4qw-buy"/><path class="gkol7ubwa"/></g>`,
		"fallback": "uix:mouth",
	});
}

export default Component;
