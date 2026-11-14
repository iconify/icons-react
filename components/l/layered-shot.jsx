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
		"content": `<style>.i06wxc7gh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5h14l-2 15H7Zm.5 4h13M6 12.75h12M6.5 16.5h11");
}
</style><path class="i06wxc7gh"/>`,
		"fallback": "uix-sharp:layered-shot",
	});
}

export default Component;
