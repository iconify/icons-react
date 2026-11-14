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
		"content": `<style>.yd-5jvbwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 8l19-4.75v3L2.5 11Zm2 2.5V21m14-14v14M7.25 20v-2.75l2-3h4.5l2 3V20Z");
}
</style><path class="yd-5jvbwt"/>`,
		"fallback": "uix-sharp:solar-carport",
	});
}

export default Component;
