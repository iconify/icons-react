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
		"content": `<style>.hd02a5typ {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 4.5h17.5V8H3.25zm0 3.5h17.5v2.25C17 10.75 14.5 14 14 19.5h-4c-.5-5.5-3-8.75-6.75-9.25Z");
}
</style><path class="hd02a5typ"/>`,
		"fallback": "iconoven:underwear-sharp",
	});
}

export default Component;
