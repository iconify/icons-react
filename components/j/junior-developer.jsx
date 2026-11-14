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
		"content": `<style>.idrd42bbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM2.5 21c0-4 3.5-6.5 7.5-6.5c.584 0 1.158.053 1.711.157M18 21.5v-5m0 1c0-2.5 1.5-3.5 3.5-3.5c0 2.5-1.5 3.5-3.5 3.5Zm0 1c0-2-1.5-3-3.5-3c0 2 1.5 3 3.5 3Z");
}
</style><path class="idrd42bbh"/>`,
		"fallback": "uix-sharp:junior-developer",
	});
}

export default Component;
