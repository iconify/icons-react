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
		"content": `<style>.gwzceryzj {
  d: path("m7.75 12.25l3 3l5.5-5.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p8j3vhbtl {
  d: path("M12 2.5c2.5 1.5 5 2 7.5 2v7c0 5-3.5 8.25-7.5 10c-4-1.75-7.5-5-7.5-10v-7c2.5 0 5-.5 7.5-2");
}
</style><g class="hntgybcog"><path class="p8j3vhbtl"/><path class="gwzceryzj"/></g>`,
		"fallback": "uix:safety-shield-check",
	});
}

export default Component;
