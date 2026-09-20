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
		"content": `<style>.c5icmybsm {
  d: path("m4 12 6 -6h10v12H10Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zhn_01m4j {
  d: path("m14 9.5 2.5 2.5 -2.5 2.5 -2.5 -2.5Z");
}
</style><g class="hntgybcog"><path class="c5icmybsm"/><path class="zhn_01m4j"/></g>`,
		"fallback": "iconmind:release-candidate-outline-thin",
	});
}

export default Component;
