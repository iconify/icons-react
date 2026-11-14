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
		"content": `<style>.e8crs_b4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h13v19h-13ZM3 6.5h6.25M3 12h6.25M3 17.5h6.25m3.25-2V13m2.5 2.5V9m2.5 6.5V11");
}
</style><path class="e8crs_b4n"/>`,
		"fallback": "uix-sharp:report-binder",
	});
}

export default Component;
