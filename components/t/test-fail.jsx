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
		"content": `<style>.bp4ffetrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5h8L21.5 8v8L16 21.5H8L2.5 16V8ZM9 9l6 6m0-6l-6 6");
}
</style><path class="bp4ffetrz"/>`,
		"fallback": "uix-sharp:test-fail",
	});
}

export default Component;
