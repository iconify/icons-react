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
		"content": `<style>.falrg-bki {
  fill: currentColor;
  d: path("M4.5 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M16 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r3zyu660c {
  d: path("M2.5 20c3.5 0 4.5-3 4-7L9 16l2-7l2 7l2.5-5l1.5 6c0 2 2 3 4.5 3Z");
}
</style><g class="hntgybcog"><path class="r3zyu660c"/><path class="falrg-bki"/></g>`,
		"fallback": "uix:mud-splash",
	});
}

export default Component;
