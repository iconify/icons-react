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
		"content": `<style>.ayz6y5bsf {
  d: path("M15.25 4.75c-6 0-8.5 1.75-8.5 4.25c0 3.5 13 2 13 6.75c0 2.75-3.5 3.75-7.75 3.75");
}

.d2jtwgb9m {
  d: path("M5.75 17.5H10a2 2 0 0 1 2 2a2 2 0 0 1-2 2H5.75a2 2 0 0 1-2-2a2 2 0 0 1 2-2m.75 0v4m2.75-4v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v8uu8rbne {
  d: path("M15.25 4.75a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="v8uu8rbne"/><path class="ayz6y5bsf"/><path class="d2jtwgb9m"/></g>`,
		"fallback": "uix:rattlesnake",
	});
}

export default Component;
