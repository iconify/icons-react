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
		"content": `<style>.erb_15hvg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 18.75c-.75-8.5 3.5-14 14-14c0 10.5-5.5 14.75-14 14ZM3 21l10.5-10.5");
}
</style><path class="erb_15hvg"/>`,
		"fallback": "iconoven:leaf-check-sharp",
	});
}

export default Component;
