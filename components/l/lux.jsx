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
		"content": `<style>.hqvk5zj3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19a9 9 0 0 1 18 0M12 7.25V5M6.25 8.75L5 6.75m12.75 2l1.25-2M12 19l2.75-4.75M12 19h.01");
}
</style><path class="hqvk5zj3t"/>`,
		"fallback": "uix-sharp:lux",
	});
}

export default Component;
