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
		"content": `<style>.fhuo5_b1u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 3l3 3l3-3l4 3l-1.5 3.5V21h-11V9.5L5 6Zm3 3v15");
}
</style><path class="fhuo5_b1u"/>`,
		"fallback": "uix-sharp:protective-gown",
	});
}

export default Component;
