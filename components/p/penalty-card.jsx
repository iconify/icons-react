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
		"content": `<style>.b9wdz6b3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.273 3.135l9.781 2.079l-3.327 15.651l-9.781-2.079ZM18.5 7.5l3-1.5M19 12h2.5");
}
</style><path class="b9wdz6b3j"/>`,
		"fallback": "uix-sharp:penalty-card",
	});
}

export default Component;
