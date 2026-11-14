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
		"content": `<style>.eiko52b1a {
  d: path("M8 18.928A8 8 0 0 1 12 4m10 5.75L20 12l-2-2.25");
}

.eqg9a_s-p {
  d: path("m9 12.25l2.25 2.25L15 10.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vkrpgmbcp {
  d: path("M16 5.072A8 8 0 0 1 12 20M2 14.25L4 12l2 2.25");
}
</style><g class="hntgybcog"><path class="vkrpgmbcp"/><path class="eiko52b1a"/><path class="eqg9a_s-p"/></g>`,
		"fallback": "uix:sync-done",
	});
}

export default Component;
