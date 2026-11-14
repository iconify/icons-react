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
		"content": `<style>.gyfdt-piv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 13.75a6.36 5-45 0 1 9-9a6.36 5-45 0 1-9 9L3.5 20.5");
}
</style><path class="gyfdt-piv"/>`,
		"fallback": "uix-sharp:squash-racket",
	});
}

export default Component;
