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
		"content": `<style>.n6w2jhypl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0m-16 7C5 11.75 6.25 11 7.75 11s2.75 1 2.75 2.5c0 2.5-5.5 4-5.5 7.5h5.75m6.75 0V11L13 17.5h6.25");
}
</style><path class="n6w2jhypl"/>`,
		"fallback": "uix-sharp:store-24-hours",
	});
}

export default Component;
