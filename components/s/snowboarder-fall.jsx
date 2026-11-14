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
		"content": `<style>.i6z6d4ymo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 19.5L5.5 6a2.5 2.5 0 0 1 5 0L13 19.5m-10.5 0h19m-6.5-5l1.5-3m.75 5L21 14.75m-1-3.25h.01");
}
</style><path class="i6z6d4ymo"/>`,
		"fallback": "uix-sharp:snowboarder-fall",
	});
}

export default Component;
