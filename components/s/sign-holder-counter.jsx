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
		"content": `<style>.yvk3xmbbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h10l-1.5 14h-10ZM3.5 17h10l7 3.5h-10Zm10 0L15 3M6.5 7h6M6 10.5h5.5m-6 3.5h5");
}
</style><path class="yvk3xmbbl"/>`,
		"fallback": "uix-sharp:sign-holder-counter",
	});
}

export default Component;
