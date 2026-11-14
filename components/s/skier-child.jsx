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
		"content": `<style>.f6cl3mbpq {
  d: path("M3.5 15v-4.5a5 5 0 0 1 10 0V12h-4v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p87ht-f4a {
  d: path("M2.5 15H16c2.5 0 3.5-1.5 4-3.5m-16 7h13.5c2.5 0 3.5-1.5 4-3.5");
}
</style><g class="hntgybcog"><path class="f6cl3mbpq"/><path class="p87ht-f4a"/></g>`,
		"fallback": "uix:skier-child",
	});
}

export default Component;
