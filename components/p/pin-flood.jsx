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
		"content": `<style>.p49pdnbuj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7c1.75-2.25 4.25-2.25 6 0s4.25 2.25 6 0s4.25-2.25 6 0M3 13c1.75-2.25 4.25-2.25 6 0s4.25 2.25 6 0s4.25-2.25 6 0M3 19c1.75-2.25 4.25-2.25 6 0s4.25 2.25 6 0s4.25-2.25 6 0");
}
</style><path class="p49pdnbuj"/>`,
		"fallback": "uix-sharp:pin-flood",
	});
}

export default Component;
