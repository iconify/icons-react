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
		"content": `<style>.ij-mcq8wi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 4.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm0 7.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="ij-mcq8wi"/>`,
		"fallback": "uix-sharp:more-vertical",
	});
}

export default Component;
