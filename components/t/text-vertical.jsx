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
		"content": `<style>.hs0dnkb2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 3.75h7.5M8 3.75v6.75m-3.5 9.75l3.5-7l3.5 7m-5.75-2.5h4.5m7.5-14V20M15 17.25L17.75 20l2.75-2.75");
}
</style><path class="hs0dnkb2j"/>`,
		"fallback": "iconoven:text-vertical",
	});
}

export default Component;
