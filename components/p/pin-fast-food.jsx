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
		"content": `<style>.e9desubjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11c0-5 4-7.5 8-7.5S20 6 20 11Zm0 6.5h16V21H4Zm-.5-3h17");
}
</style><path class="e9desubjw"/>`,
		"fallback": "uix-sharp:pin-fast-food",
	});
}

export default Component;
