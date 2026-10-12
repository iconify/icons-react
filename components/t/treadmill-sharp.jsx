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
		"content": `<style>.zda1tr6tw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 16.25h17v4.5h-17zM6 18.5h10.5m1-2.25l-2.75-11.5h4.5");
}
</style><path class="zda1tr6tw"/>`,
		"fallback": "iconoven:treadmill-sharp",
	});
}

export default Component;
