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
		"content": `<style>.z6laknv1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21V3h7L12 9h2l1.5 6h3l2 6Zm0-12H12m-8.5 6h12");
}
</style><path class="z6laknv1d"/>`,
		"fallback": "uix-sharp:rock-cliff-layers",
	});
}

export default Component;
