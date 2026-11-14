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
		"content": `<style>.a9nabz4oe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5H16L14.5 14H4Zm2.5 0V4h6v4.5M17.5 20v-5.5h4m-5.5-6l4 6");
}
</style><path class="a9nabz4oe"/>`,
		"fallback": "uix-sharp:port-call",
	});
}

export default Component;
