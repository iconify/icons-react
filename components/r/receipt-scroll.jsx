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
		"content": `<style>.v4on1sbpg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 3.25h4.5a2.5 2.5 0 0 1 2.5 2.5v15.5l-1.58-1.2l-1.58 1.2l-1.59-1.2l-1.58 1.2l-1.59-1.2l-1.58 1.2V5.75a2.5 2.5 0 0 1 2.5-2.5m-5.5 0h15.5M9.25 7h5.5m-5.5 3h5.5m-5.5 3h5.5m-5.5 3h3.5");
}
</style><path class="v4on1sbpg"/>`,
		"fallback": "iconoven:receipt-scroll",
	});
}

export default Component;
