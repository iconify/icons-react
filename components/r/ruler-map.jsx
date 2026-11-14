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
		"content": `<style>.nktvtlbag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.187 18.38L2.5 19.5V5l6-2.5L15 5l5.5-2.5v4.894M9.136 18.328l9.192-9.192l3.536 3.536l-9.192 9.192Z");
}
</style><path class="nktvtlbag"/>`,
		"fallback": "uix-sharp:ruler-map",
	});
}

export default Component;
