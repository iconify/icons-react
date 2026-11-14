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
		"content": `<style>.h5sh1ux3n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 19.25a8.75 8.75 0 1 1 12.5 0M12 13l-5.75 2.5M12 13h.01");
}
</style><path class="h5sh1ux3n"/>`,
		"fallback": "uix-sharp:pressure-low",
	});
}

export default Component;
