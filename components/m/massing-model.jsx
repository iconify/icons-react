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
		"content": `<style>.x92k81_vx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7h7v13.5H4Zm0 0l3-3h7l-3 3m0 6h7v7.5h-7Zm0 0l3-3h7l-3 3m3-3v7.5l-3 3M14 4v6");
}
</style><path class="x92k81_vx"/>`,
		"fallback": "uix-sharp:massing-model",
	});
}

export default Component;
