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
		"content": `<style>.sgq4e7bbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.75h6V8.5H9zM9 5.6h6M9.75 8.5h5.75l1.13.53l1.99.94l1.13.53l.19 1.24l1.12 7.27l.19 1.24l-1.22.26l-1.06.23q-1.22.26-2.47.26h-9q-1.25 0-2.47-.26l-1.06-.23l-1.22-.26l.19-1.24l1.12-7.27l.19-1.24l1.13-.53l1.99-.94L8.5 8.5zm-3 4.5v8m10.5-8v8");
}
</style><path class="sgq4e7bbl"/>`,
		"fallback": "iconoven:turtleneck-sharp",
	});
}

export default Component;
