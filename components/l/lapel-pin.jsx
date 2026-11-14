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
		"content": `<style>.k6g3xubvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm1.25 2.75L4 20m2.616-6.152l3.536 3.536l-1.768 1.768l-3.536-3.536Z");
}
</style><path class="k6g3xubvn"/>`,
		"fallback": "uix-sharp:lapel-pin",
	});
}

export default Component;
