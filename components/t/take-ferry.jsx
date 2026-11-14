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
		"content": `<style>.hrp3b5b0u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5h19l-3 5h-13Zm3.5 0v-4a1 1 0 0 1 1-1h8l3 5M8.5 3h3v3.5h-3Zm-5 18q2.75-1.5 5.5 0t5.5 0t5.5 0");
}
</style><path class="hrp3b5b0u"/>`,
		"fallback": "uix-sharp:take-ferry",
	});
}

export default Component;
