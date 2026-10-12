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
		"content": `<style>.ssis4kbow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.5v-1H6.5L11 4.75v14.5L6.5 15.5H2.75v-1Zm11.5-2c2.5 0 3 4.5 5.25 4.5h1.75m-7 4.5c2.5 0 3-4.5 5.25-4.5");
}
</style><path class="ssis4kbow"/>`,
		"fallback": "iconoven:mono-audio-sharp",
	});
}

export default Component;
