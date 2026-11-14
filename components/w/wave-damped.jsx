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
		"content": `<style>.uw-cn0btq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3v18m0-9C3.75 2.75 5.75 2.75 7 12c1 6.75 3 6.75 4 0c.75-4.75 2.75-4.75 3.5 0c.75 3.25 2.25 3.25 3 0h4");
}
</style><path class="uw-cn0btq"/>`,
		"fallback": "uix:wave-damped",
	});
}

export default Component;
