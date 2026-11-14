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
		"content": `<style>.sgdk5us9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3h14v18H4Zm14 2.5h1.5a1 1 0 0 1 1 1V8a1 1 0 0 1-1 1H18m0 3h1.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H18M8 3v18m3-13h4");
}
</style><path class="sgdk5us9g"/>`,
		"fallback": "uix-sharp:notebook-tabs",
	});
}

export default Component;
