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
		"content": `<style>.x145syb4h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.25v18M5.75 7.5l12.5-2m-12.5 2L3.25 14m2.5-6.5l2.5 6.5m10-8.5l-2.5 6m2.5-6l2.5 6m-18 3h6a3 3 0 0 1-6 0Zm12.5-2.5h6a3 3 0 0 1-6 0Zm-7.5 9.25h8.5");
}
</style><path class="x145syb4h"/>`,
		"fallback": "iconoven:scales-justice-sharp",
	});
}

export default Component;
