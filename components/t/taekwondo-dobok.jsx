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
		"content": `<style>.hs-e_5rjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3L3 6.5L4.5 12L7 11v10h10V11l2.5 1L21 6.5L15.5 3Zm0 0L14 14m1.5-11l-3.75 6.5M7 14h10m-7 0l-1.5 4m1.5-4l1.5 4");
}
</style><path class="hs-e_5rjc"/>`,
		"fallback": "uix:taekwondo-dobok",
	});
}

export default Component;
