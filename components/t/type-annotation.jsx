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
		"content": `<style>.yv86n8b3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 5H18a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 19h-5.5A3.5 3.5 0 0 1 9 15.5v-7A3.5 3.5 0 0 1 12.5 5m-8 4h.01m-.01 6h.01M12 9h6.5m-3.25 0v6.5");
}
</style><path class="yv86n8b3g"/>`,
		"fallback": "uix:type-annotation",
	});
}

export default Component;
