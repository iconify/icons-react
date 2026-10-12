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
		"content": `<style>.dekgbmfcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.95 3.56l5.1 4.38l.95.81l-.9.87l-5.2 5.01l-.9.87l-.9-.87l-5.2-5.01l-.9-.87l.95-.81l5.1-4.38l.95-.81zM12 5.25V13M7.75 8.75h8.5M12 16.25c0 1.5-1.75 1.5-1.75 2.5s1.75 1 1.75 2.5");
}
</style><path class="dekgbmfcc"/>`,
		"fallback": "iconoven:kite-sharp",
	});
}

export default Component;
