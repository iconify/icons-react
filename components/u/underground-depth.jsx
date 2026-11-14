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
		"content": `<style>.qmjmrub9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7h19m-6-4v17.5M12 17l3.5 3.5L19 17M6 7v13.5m0-6.75h3M6 20.5h3");
}
</style><path class="qmjmrub9e"/>`,
		"fallback": "uix-sharp:underground-depth",
	});
}

export default Component;
