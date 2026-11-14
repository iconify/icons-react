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
		"content": `<style>.ba6gx5n6j {
  d: path("m3.5 7l8.5 4.5L20.5 7M12 11.5v2.75m6 .75v3m0 3h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tkb58bblb {
  d: path("M12 2.5L20.5 7v5.25H14a2 2 0 0 0-2 2v7.25L3.5 17V7Z");
}
</style><g class="hntgybcog"><path class="tkb58bblb"/><path class="ba6gx5n6j"/></g>`,
		"fallback": "uix:low-stock",
	});
}

export default Component;
