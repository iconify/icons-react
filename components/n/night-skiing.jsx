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
		"content": `<style>.shtnemkps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3a5.5 5.5 0 1 0 4 8a4.5 4.5 0 0 1-4-8ZM2.5 20.5l19-6.5M18 12.5v-7M16 3h5v2.5h-5Z");
}
</style><path class="shtnemkps"/>`,
		"fallback": "uix-sharp:night-skiing",
	});
}

export default Component;
