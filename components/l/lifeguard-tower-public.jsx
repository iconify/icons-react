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
		"content": `<style>.m42dr2blq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8L12 3l8.5 5Zm3 0v4.5h11V8M7 12.5l-2 9m12-9l2 9m-8.5-9v9m3-9v9m-3-5.75h3m-3 3h3");
}
</style><path class="m42dr2blq"/>`,
		"fallback": "uix:lifeguard-tower-public",
	});
}

export default Component;
