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
		"content": `<style>.ergbex4av {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19v9h-19ZM6 16.5h4m3 0h5M7.5 2.5h9v4h-9Zm2.5 4a2 2 0 0 0 4 0");
}
</style><path class="ergbex4av"/>`,
		"fallback": "uix-sharp:license-plate-reader",
	});
}

export default Component;
