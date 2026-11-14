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
		"content": `<style>.e-2h9-hsk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.9 6h5.6v5.6M14.1 18H2.5V6.4m13 5.192V10.5l6-3.5v10l-1.428-.833M3.5 3.5l17 17");
}
</style><path class="e-2h9-hsk"/>`,
		"fallback": "uix-sharp:video-off",
	});
}

export default Component;
