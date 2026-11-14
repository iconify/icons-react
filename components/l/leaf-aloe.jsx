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
		"content": `<style>.zwc867byb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 21.5C8 14 10 7.5 16 3.5c-.25 6 0 11.5-.5 18Zm.25-5.5l-2-1m3-4L8 9.5m4.25-2.75L11 5.25m5 2.5l1.75-1.25M16 12l2-1m-2.25 5.75l2-1");
}
</style><path class="zwc867byb"/>`,
		"fallback": "uix:leaf-aloe",
	});
}

export default Component;
