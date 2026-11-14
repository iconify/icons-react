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
		"content": `<style>.r1xb0wbay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3.5h5v7h-5Zm0 1.5h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6m5-4h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6M11 10.5L7.5 20l3 1l1.5-5.5l1.5 3l3-1l-3.5-7");
}
</style><path class="r1xb0wbay"/>`,
		"fallback": "uix-sharp:karate-kids",
	});
}

export default Component;
