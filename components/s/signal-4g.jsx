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
		"content": `<style>.zpyifeb8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 17V7l-5 6.5h6.5m11.58-2.794A5 5 0 1 1 16.25 7m5 5H17");
}
</style><path class="zpyifeb8w"/>`,
		"fallback": "uix-sharp:signal-4g",
	});
}

export default Component;
