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
		"content": `<style>.bqzkyabic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 3.75h5v13h-5zm8.5 4.75h5v8.25h-5zm-11 11.75h18.5");
}
</style><path class="bqzkyabic"/>`,
		"fallback": "iconoven:vertical-align-bottom-sharp",
	});
}

export default Component;
