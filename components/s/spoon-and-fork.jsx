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
		"content": `<style>.zphcc9bva {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5V8a2.5 2.5 0 0 0 5 0V3.5m-2.5 7v10m5-13a2.5 4 0 1 0 5 0a2.5 4 0 1 0-5 0Zm2.5 4v9");
}
</style><path class="zphcc9bva"/>`,
		"fallback": "uix-sharp:spoon-and-fork",
	});
}

export default Component;
