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
		"content": `<style>.yvcozp5sf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 11a5 5 0 0 1 10 0v6H7Zm2.5 6v4.5m5-4.5v4.5m-5-13V11");
}
</style><path class="yvcozp5sf"/>`,
		"fallback": "uix-sharp:led-component",
	});
}

export default Component;
