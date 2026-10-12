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
		"content": `<style>.uo0oy6qmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4v5.5h-4zm0 2.75h4m-2 3.75v2.25m-3 .25h6v9.5H9zm0 3h6");
}
</style><path class="uo0oy6qmk"/>`,
		"fallback": "iconoven:mascara-sharp",
	});
}

export default Component;
