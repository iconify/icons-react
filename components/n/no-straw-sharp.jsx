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
		"content": `<style>.gvl9ujb_m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 8.25H18l-.14 1.49l-.97 10.02l-.14 1.49h-9.5l-.14-1.49l-.97-10.02L6 8.25zm4.5 0l1.5-5.5h3m-13.25.5l17.5 17.5");
}
</style><path class="gvl9ujb_m"/>`,
		"fallback": "iconoven:no-straw-sharp",
	});
}

export default Component;
