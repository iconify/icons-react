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
		"content": `<style>.p5h65b8lw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3m-8 0V3.5M7.5 8L12 3.5L16.5 8");
}
</style><path class="p5h65b8lw"/>`,
		"fallback": "uix-sharp:upload",
	});
}

export default Component;
