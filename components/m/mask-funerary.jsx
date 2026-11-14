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
		"content": `<style>.lv6u-nb2z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h12v8c0 5-2.5 8.5-6 8.5S6 17 6 12Zm2.5 6h2m3 0h2m-5 5.5h3");
}
</style><path class="lv6u-nb2z"/>`,
		"fallback": "uix:mask-funerary",
	});
}

export default Component;
