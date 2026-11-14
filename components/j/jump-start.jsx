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
		"content": `<style>.feyl7phah {
  d: path("M6.5 13A1.25 1.25 0 1 0 9 13a1.25 1.25 0 1 0-2.5 0m4.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M15 13a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4.25 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.gm6lipbyo {
  fill: currentColor;
  d: path("M2.25 13a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytjynlk3k {
  d: path("M2.5 9h19");
}
</style><g class="hntgybcog"><path class="ytjynlk3k"/><path class="gm6lipbyo"/><path class="feyl7phah"/></g>`,
		"fallback": "uix:jump-start",
	});
}

export default Component;
