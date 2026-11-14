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
		"content": `<style>.x9rda-srl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h13m-12 0v15m11-15v15M6.5 11h12m-1 0v10.5m-7-6h11m-1 0v6");
}
</style><path class="x9rda-srl"/>`,
		"fallback": "uix-sharp:nesting-tables",
	});
}

export default Component;
