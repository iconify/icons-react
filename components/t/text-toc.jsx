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
		"content": `<style>.nm5vz_b4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v19h-15ZM8 8h.01M8 12h.01M8 16h.01M11 8h5m-5 4h3.5M11 16h5");
}
</style><path class="nm5vz_b4m"/>`,
		"fallback": "uix-sharp:text-toc",
	});
}

export default Component;
