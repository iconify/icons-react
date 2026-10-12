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
		"content": `<style>.fvu2lcbbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.25h4v8h-4zm6.25-4h4v12H9zm9 12V4.5m-3.25 3L18 4.25l3.25 3.25");
}
</style><path class="fvu2lcbbz"/>`,
		"fallback": "iconoven:metric-up-sharp",
	});
}

export default Component;
