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
		"content": `<style>.a0ptn1x6n {
  d: path("m9 16l3 3l-3 3M3.5 3.5l17 17");
}

.ep_bwzqsu {
  d: path("M12 5a7 7 0 0 1 6.395 9.847");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uhu714udj {
  d: path("m15 2l-3 3l3 3m-3 11a7 7 0 0 1-6.395-9.847");
}
</style><g class="hntgybcog"><path class="ep_bwzqsu"/><path class="uhu714udj"/><path class="a0ptn1x6n"/></g>`,
		"fallback": "uix:sync-off",
	});
}

export default Component;
