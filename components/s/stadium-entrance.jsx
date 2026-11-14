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
		"content": `<style>.a1owhhb3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5h6.5v15H3Zm18 0v15M9.5 10H18m-8.5 0l6.5 6.5M9.5 10l5-6");
}
</style><path class="a1owhhb3r"/>`,
		"fallback": "uix-sharp:stadium-entrance",
	});
}

export default Component;
