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
		"content": `<style>.cg9_k-j4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 5l1-2l3 6l7 1l-3 3m-1.4 5.6L18 21l-6-3l-6 3l1-6l-5-5l6.125-.875M2 3l19 19");
}
</style><path class="cg9_k-j4o"/>`,
		"fallback": "coolicons:star-off-round",
	});
}

export default Component;
