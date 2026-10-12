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
		"content": `<style>.nkc2l530s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 17.25l4-3.75L10 16.25l4.25-9.5l3.25 6.5l3.75-3.5m-18.5 11.5h18.5M2.75 3.75H5m2.5 0h2.25m2.5 0h4m2.5 0h2.5");
}
</style><path class="nkc2l530s"/>`,
		"fallback": "iconoven:peak-demand",
	});
}

export default Component;
