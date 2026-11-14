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
		"content": `<style>.q-p6y66tm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 5h12l3.5 14h-19Zm4 0L8.75 19M14 5l1.25 14");
}
</style><path class="q-p6y66tm"/>`,
		"fallback": "uix-sharp:pitch-grass-stripes",
	});
}

export default Component;
