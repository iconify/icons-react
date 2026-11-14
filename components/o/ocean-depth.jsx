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
		"content": `<style>.oatx8yp1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6q3-2 6 0t6 0m-12 6q3-2 6 0t6 0m-12 6q3-2 6 0t6 0m5-14v16m-2.25-2.25L19.5 20l2.25-2.25");
}
</style><path class="oatx8yp1w"/>`,
		"fallback": "uix:ocean-depth",
	});
}

export default Component;
