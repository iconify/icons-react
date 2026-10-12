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
		"content": `<style>.mxh2uqiqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3.5h6l.47.88l.81 1.49l.47.88l-.47.88l-.81 1.49l-.47.88h-7l-.47-.88l-.81-1.49l-.47-.88l.47-.88l.81-1.49l.47-.88zm.75 3.25h3.5m-7.25 5.5h11v4h-11zm1.25 4l-3.25 5m11.75-5l3.25 5m-16.75 0h3.5m11.5 0h3.5");
}
</style><path class="mxh2uqiqy"/>`,
		"fallback": "iconoven:lunar-module-sharp",
	});
}

export default Component;
