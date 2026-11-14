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
		"content": `<style>.d-vewhbti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5h19v8h-19Zm9.5-11v19M6.5 10.75h11m-8-6h5V8h-5Z");
}
</style><path class="d-vewhbti"/>`,
		"fallback": "uix-sharp:roof-bolt",
	});
}

export default Component;
