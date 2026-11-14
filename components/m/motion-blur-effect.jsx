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
		"content": `<style>.nz-d5ubxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0ZM2.5 9H7m-4.5 3h4m-4 3H7");
}
</style><path class="nz-d5ubxz"/>`,
		"fallback": "uix-sharp:motion-blur-effect",
	});
}

export default Component;
