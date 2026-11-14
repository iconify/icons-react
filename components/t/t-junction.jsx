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
		"content": `<style>.ln81zp5fz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 3.5h20m-20 8h6.5v10m13.5-10h-6.5v10m-3.5-7V19");
}
</style><path class="ln81zp5fz"/>`,
		"fallback": "uix-sharp:t-junction",
	});
}

export default Component;
