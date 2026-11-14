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
		"content": `<style>.o19tt92qh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.4 4.5h11.1v11h-.1m-7.8 0H4.5V8.4m-2 10.1h12.1M3.5 3.5l17 17");
}
</style><path class="o19tt92qh"/>`,
		"fallback": "uix-sharp:laptop-off",
	});
}

export default Component;
