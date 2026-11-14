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
		"content": `<style>.k3bjhkdpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17h18m-4-4l4 4l-4 4M3 6h8M8.5 3.5L11 6L8.5 8.5M21 6h-5.5M18 3.5L15.5 6L18 8.5");
}
</style><path class="k3bjhkdpm"/>`,
		"fallback": "uix-sharp:net-force",
	});
}

export default Component;
