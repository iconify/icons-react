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
		"content": `<style>.h0kwjcc3e {
  d: path("M10 10.5h4v10h-4Zm7-7h4v17h-4Z");
}

.k15yz01bh {
  fill: currentColor;
  d: path("M3 16.5h4v4H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k15yz01bh"/><path class="h0kwjcc3e"/></g>`,
		"fallback": "uix-sharp:priority-low",
	});
}

export default Component;
