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
		"content": `<style>.ti40ynb2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7h12l-1.5 13.5h-9ZM5 4h14v3H5Zm1.5 8h11");
}
</style><path class="ti40ynb2c"/>`,
		"fallback": "uix-sharp:takeaway-cup",
	});
}

export default Component;
