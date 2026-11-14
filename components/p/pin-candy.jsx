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
		"content": `<style>.mpha_mb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 20V8.5a6 6 0 0 1 12 0v2H13v-2a2.5 2.5 0 0 0-5 0V20Zm0-6.5l3.5-2m-3.5 7l3.5-2M19 22l-2.25-2.75a2.75 2.75 0 1 1 4.5 0Z");
}
</style><path class="mpha_mb9a"/>`,
		"fallback": "uix-sharp:pin-candy",
	});
}

export default Component;
