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
		"content": `<style>.on-l58bfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.772 7.5h10.456a2.625 2.625 0 0 1 2.562 3.194l-.833 3.75a2.625 2.625 0 0 1-2.563 2.056H7.606a2.625 2.625 0 0 1-2.563-2.056l-.833-3.75A2.625 2.625 0 0 1 6.772 7.5m.728 3h.01m2.99 0h.01m2.99 0h.01m2.99 0h.01M9 13.5h.01m2.99 0h.01m2.99 0h.01");
}
</style><path class="on-l58bfg"/>`,
		"fallback": "uix:port-serial",
	});
}

export default Component;
