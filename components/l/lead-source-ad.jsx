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
		"content": `<style>.i4f4zcoki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5h5l8.5-5v17l-8.5-5h-5Zm3 7l1.5 5M19 9a4 4 0 0 1 0 6");
}
</style><path class="i4f4zcoki"/>`,
		"fallback": "uix-sharp:lead-source-ad",
	});
}

export default Component;
