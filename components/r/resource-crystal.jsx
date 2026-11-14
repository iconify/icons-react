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
		"content": `<style>.yt93-fbcb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l5.5 5V17L12 21.5L6.5 17V7.5Zm0 4v11");
}
</style><path class="yt93-fbcb"/>`,
		"fallback": "uix-sharp:resource-crystal",
	});
}

export default Component;
