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
		"content": `<style>.urqxyb15f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17A3.5 3.5 0 0 1 8 11a4.5 4.5 0 0 1 8-.5a3.5 3.5 0 0 1 3.5 6.5m-17 0h19");
}
</style><path class="urqxyb15f"/>`,
		"fallback": "uix-sharp:liftoff-smoke",
	});
}

export default Component;
