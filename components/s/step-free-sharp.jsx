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
		"content": `<style>.ys4ifq3lg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.25h4.5v-4.5h4.5v-4.5h4.5v-4.5h5m-17.5-3l16.5 16.5");
}
</style><path class="ys4ifq3lg"/>`,
		"fallback": "iconoven:step-free-sharp",
	});
}

export default Component;
