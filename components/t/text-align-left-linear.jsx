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
		"content": `<style>.dnytl_40k {
  d: path("M5 18H14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jgeg8bc0n {
  d: path("M5 10H14");
}

.y8rchkbuh {
  d: path("M5 6H19");
}

.zvlywgbxr {
  d: path("M5 14H19");
}
</style><g class="hntgybcog"><path class="y8rchkbuh"/><path class="jgeg8bc0n"/><path class="zvlywgbxr"/><path class="dnytl_40k"/></g>`,
		"fallback": "solar:text-align-left-linear",
	});
}

export default Component;
