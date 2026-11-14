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
		"content": `<style>.t3pa-2mda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h13a6.5 6.5 0 0 1-13 0Zm6.5 0V4.5A6.5 6.5 0 0 0 3.5 11m13 0l1.25-5h2.75M5 20a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm7.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="t3pa-2mda"/>`,
		"fallback": "uix-sharp:stroller",
	});
}

export default Component;
