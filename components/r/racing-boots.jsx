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
		"content": `<style>.ggbrrbral {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h6.5V11l5.5 2a2.5 2.5 0 0 1 2.5 2.5v5H5Zm0 15h14.5M5 8h6.5");
}
</style><path class="ggbrrbral"/>`,
		"fallback": "uix-sharp:racing-boots",
	});
}

export default Component;
