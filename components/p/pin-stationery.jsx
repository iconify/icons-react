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
		"content": `<style>.s37ft46pf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h11v17h-11ZM6 7.5h4m-4 4h3M16.5 4h4v13l-2 4l-2-4Zm0 3h4");
}
</style><path class="s37ft46pf"/>`,
		"fallback": "uix-sharp:pin-stationery",
	});
}

export default Component;
