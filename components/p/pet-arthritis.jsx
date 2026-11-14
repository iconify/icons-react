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
		"content": `<style>.gvxeeic5j {
  d: path("m9.25 14.25l-2.5 6.25H3.5m15-15L16.25 11h4.25L18 17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ogba4qsua {
  d: path("m6.5 2.5l2.75 6.25M7.5 11.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="ogba4qsua"/><path class="gvxeeic5j"/></g>`,
		"fallback": "uix:pet-arthritis",
	});
}

export default Component;
