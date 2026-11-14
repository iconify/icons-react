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
		"content": `<style>.w4f9a8kzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15.5h16v6H4Zm2-6h12v6H6Zm4.5 0l7-1.5l-1-5l-7 1.5Z");
}
</style><path class="w4f9a8kzy"/>`,
		"fallback": "uix-sharp:tower-stack",
	});
}

export default Component;
