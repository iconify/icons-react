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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ofyfpwwjf {
  d: path("M4.5 20.25h15q1.5 0 .59-1.19L9.41 5.19Q8.5 4 8.02 5.42L3.48 18.83Q3 20.25 4.5 20.25");
}

.zxsa6nb8l {
  d: path("M8.5 20.25a5.5 5.5 0 0 0-3.74-5.21");
}
</style><g class="hntgybcog"><path class="ofyfpwwjf"/><path class="zxsa6nb8l"/></g>`,
		"fallback": "iconoven:triangle-angle",
	});
}

export default Component;
