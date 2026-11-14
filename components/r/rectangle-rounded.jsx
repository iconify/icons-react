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
		"content": `<style>.ilo4w7blv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5h14A2.5 2.5 0 0 1 21.5 8v8a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 16V8A2.5 2.5 0 0 1 5 5.5Z");
}
</style><path class="ilo4w7blv"/>`,
		"fallback": "uix-sharp:rectangle-rounded",
	});
}

export default Component;
