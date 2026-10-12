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
		"content": `<style>.alnlyebad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 15.5v-5a4.5 4.5 0 0 1 9 0v5Zm2.5 0v5.75m4-5.75v4.25m3.66-14.91l1.6-1.6m.13 4.2l2.77-1.15M17.5 10.5h3");
}
</style><path class="alnlyebad"/>`,
		"fallback": "iconoven:led-light",
	});
}

export default Component;
