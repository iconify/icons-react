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
		"content": `<style>.cq10z4x8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20c5 0 5.5-11.5 12-11.5c4.5 0 7 4 5 7c-1.5 2-4.5 1.5-4.25-1.25m-8.5-8.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5.5-2.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM18 4.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><path class="cq10z4x8b"/>`,
		"fallback": "uix-sharp:sea-spray",
	});
}

export default Component;
