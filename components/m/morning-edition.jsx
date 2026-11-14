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
		"content": `<style>.f4h669cmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.5 21.5H5a2 2 0 0 1-2-2V11h14.5v8.5a2 2 0 0 0 2 2A1.5 1.5 0 0 0 21 20v-6h-3.5m-9-3a3.5 3.5 0 0 1 7 0M12 2.5v2.25M7.5 6.5L6 5m10.5 1.5L18 5M6 14.5h8.5M6 18h5.5");
}
</style><path class="f4h669cmr"/>`,
		"fallback": "uix-sharp:morning-edition",
	});
}

export default Component;
