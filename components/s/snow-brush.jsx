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
		"content": `<style>.bc9ub2nfj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v9m-4.75 0h9.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 16.75 15h-9.5a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75M7.5 15v5.5m3-5.5v5.5m3-5.5v5.5m3-5.5v5.5");
}
</style><path class="bc9ub2nfj"/>`,
		"fallback": "uix:snow-brush",
	});
}

export default Component;
