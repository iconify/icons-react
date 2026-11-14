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
		"content": `<style>.dx-ny8b6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 14l5-4.5l5 4.5v7h-10ZM13 3.5h8.5m-7 4H21m-5 4h4m-3 4h2.5");
}
</style><path class="dx-ny8b6h"/>`,
		"fallback": "uix-sharp:tornado-shelter",
	});
}

export default Component;
