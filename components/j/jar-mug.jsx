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
		"content": `<style>.w1umcuvph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3h11v4h-11ZM4 7h12v14.5H4Zm12 3h1.5a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H16m-9-7.5V17");
}
</style><path class="w1umcuvph"/>`,
		"fallback": "uix-sharp:jar-mug",
	});
}

export default Component;
