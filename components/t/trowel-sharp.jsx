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
		"content": `<style>.et82h_mkx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.09 19.79l2.62-11.4l.34-1.46l1.06 1.06l8.9 8.9l1.06 1.06l-1.46.34l-11.4 2.62l-1.46.34zm8.47-7.35l3.19-3.19m4.39-5.09l.7.7l1.41 1.41l-1.41 1.41l-2.16 2.16l-1.41 1.41l-1.41-1.41l-.7-.7l-1.41-1.41l1.41-1.41l2.16-2.16l1.41-1.41z");
}
</style><path class="et82h_mkx"/>`,
		"fallback": "iconoven:trowel-sharp",
	});
}

export default Component;
