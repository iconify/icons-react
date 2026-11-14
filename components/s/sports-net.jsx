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
		"content": `<style>.whs7y6bsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h17v17h-17Zm0 11l11-11m-5 17l11-11m-11-6l11 11m-17-5l11 11");
}
</style><path class="whs7y6bsw"/>`,
		"fallback": "uix-sharp:sports-net",
	});
}

export default Component;
