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
		"content": `<style>.hu9vfhbfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5h13v8H4ZM2.5 21h16M18 3.25l1.061 1.689L20.75 6l-1.689 1.061L18 8.75l-1.061-1.689L15.25 6l1.689-1.061Z");
}
</style><path class="hu9vfhbfm"/>`,
		"fallback": "uix-sharp:scene-work",
	});
}

export default Component;
