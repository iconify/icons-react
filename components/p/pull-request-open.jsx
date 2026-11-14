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
		"content": `<style>.b6m1gwbvv {
  d: path("M18 7.25V11a4 4 0 0 1-4 4H9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oq4si96gj {
  d: path("M3.75 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m0 14a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M6 7.25v9.5M15.75 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.q5dr00bah {
  d: path("M11.75 12.75L9.5 15l2.25 2.25");
}
</style><g class="hntgybcog"><path class="oq4si96gj"/><path class="b6m1gwbvv"/><path class="q5dr00bah"/></g>`,
		"fallback": "uix:pull-request-open",
	});
}

export default Component;
