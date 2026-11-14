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
		"content": `<style>.wneaedb7u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 4H5v16h3m8-16h3v16h-3m-7-8h.01M12 12h.01M15 12h.01");
}
</style><path class="wneaedb7u"/>`,
		"fallback": "uix-sharp:json-array",
	});
}

export default Component;
