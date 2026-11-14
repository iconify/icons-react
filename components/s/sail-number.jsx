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
		"content": `<style>.eka5_4bzo {
  d: path("M5.5 2.5C12 6 18 12 19.5 18.5h-14Zm0 16v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m866e2bak {
  d: path("m8.5 12.25l2-1.75v5.25");
}
</style><g class="hntgybcog"><path class="eka5_4bzo"/><path class="m866e2bak"/></g>`,
		"fallback": "uix:sail-number",
	});
}

export default Component;
