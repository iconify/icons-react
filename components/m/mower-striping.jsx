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
		"content": `<style>.uf82w8f1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 6.5h11l4 11h-19Zm3.75 0l-1.5 11m5-11l1.5 11");
}
</style><path class="uf82w8f1g"/>`,
		"fallback": "uix-sharp:mower-striping",
	});
}

export default Component;
